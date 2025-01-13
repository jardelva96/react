<?php
namespace App\Http\Controllers;

use App\Models\Disciplina;
use Illuminate\Http\Request;
use OpenApi\Annotations as OA;

class DisciplinaController extends Controller
{
    /**
     * @OA\Get(
     *     path="/api/disciplinas",
     *     summary="Obter todas as disciplinas",
     *     description="Retorna a lista de todas as disciplinas cadastradas.",
     *     operationId="getDisciplinas",
     *     tags={"Disciplinas"},
     *     @OA\Response(
     *         response=200,
     *         description="Lista de disciplinas",
     *         @OA\JsonContent(type="array", @OA\Items(ref="#/components/schemas/Disciplina"))
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Erro ao processar a requisição"
     *     )
     * )
     */
    public function index()
    {
        return response()->json(Disciplina::all());
    }

    /**
     * @OA\Post(
     *     path="/api/disciplinas",
     *     summary="Criar uma nova disciplina",
     *     description="Adiciona uma nova disciplina com nome e descrição.",
     *     operationId="storeDisciplina",
     *     tags={"Disciplinas"},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"nome", "descricao"},
     *             @OA\Property(property="nome", type="string", example="Matemática"),
     *             @OA\Property(property="descricao", type="string", example="Disciplina de Matemática")
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Disciplina criada com sucesso",
     *         @OA\JsonContent(ref="#/components/schemas/Disciplina")
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Dados inválidos"
     *     )
     * )
     */
    public function store(Request $request)
    {
        $request->validate([
            'nome' => 'required|string',
            'descricao' => 'required|string',
        ]);

        $disciplina = Disciplina::create([
            'nome' => $request->nome,
            'descricao' => $request->descricao,
            'notas' => [],
        ]);

        return response()->json($disciplina, 201);
    }

    /**
     * @OA\Put(
     *     path="/api/disciplinas/{id}",
     *     summary="Editar uma disciplina",
     *     description="Edita o nome e a descrição de uma disciplina existente.",
     *     operationId="updateDisciplina",
     *     tags={"Disciplinas"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         description="ID da disciplina",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"nome", "descricao"},
     *             @OA\Property(property="nome", type="string", example="Matemática Avançada"),
     *             @OA\Property(property="descricao", type="string", example="Disciplina de Matemática Avançada")
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Disciplina atualizada com sucesso",
     *         @OA\JsonContent(ref="#/components/schemas/Disciplina")
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Disciplina não encontrada"
     *     )
     * )
     */
    public function update(Request $request, $id)
    {
        $disciplina = Disciplina::findOrFail($id);

        $request->validate([
            'nome' => 'required|string',
            'descricao' => 'required|string',
        ]);

        $disciplina->update([
            'nome' => $request->nome,
            'descricao' => $request->descricao,
        ]);

        return response()->json($disciplina);
    }

    /**
     * @OA\Delete(
     *     path="/api/disciplinas/{id}",
     *     summary="Excluir uma disciplina",
     *     description="Exclui uma disciplina existente.",
     *     operationId="deleteDisciplina",
     *     tags={"Disciplinas"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         description="ID da disciplina",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=204,
     *         description="Disciplina excluída com sucesso"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Disciplina não encontrada"
     *     )
     * )
     */
    public function destroy($id)
    {
        $disciplina = Disciplina::findOrFail($id);
        $disciplina->delete();

        return response()->noContent();
    }

    /**
     * @OA\Put(
     *     path="/api/disciplinas/{id}/nota",
     *     summary="Adicionar uma nota à disciplina",
     *     description="Adiciona uma nota à disciplina existente.",
     *     operationId="addNota",
     *     tags={"Disciplinas"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         description="ID da disciplina",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"nota"},
     *             @OA\Property(property="nota", type="number", example=9.5)
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Nota adicionada com sucesso",
     *         @OA\JsonContent(ref="#/components/schemas/Disciplina")
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Nota inválida"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Disciplina não encontrada"
     *     )
     * )
     */
    public function addNota(Request $request, $id)
    {
        $disciplina = Disciplina::findOrFail($id);

        $request->validate([
            'nota' => 'required|numeric|min:0|max:10',
        ]);

        $notas = $disciplina->notas;
        $notas[] = $request->nota;
        $disciplina->update(['notas' => $notas]);

        return response()->json($disciplina);
    }
}
