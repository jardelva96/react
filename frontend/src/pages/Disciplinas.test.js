import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Disciplinas from './Disciplinas'; // Ajuste o caminho de importação conforme necessário

// Mocking para o prompt e confirm
beforeAll(() => {
  global.prompt = jest.fn();
  global.confirm = jest.fn();
});

test('Exibe as disciplinas corretamente', () => {
  render(<Disciplinas />);

  const matematica = screen.getByText('Matemática');
  const fisica = screen.getByText('Física');

  expect(matematica).toBeInTheDocument();
  expect(fisica).toBeInTheDocument();
});

test('Adiciona uma nova disciplina corretamente', async () => {
  render(<Disciplinas />);

  // Mocking do prompt para retornar nome e descrição
  global.prompt.mockReturnValueOnce('Química');
  global.prompt.mockReturnValueOnce('Disciplina de Química');

  const addButton = screen.getByText('Adicionar Disciplina');

  // Simula o clique no botão de adicionar disciplina
  fireEvent.click(addButton);

  // Espera a disciplina ser adicionada
  const disciplinaNova = screen.getByText('Química');
  expect(disciplinaNova).toBeInTheDocument();
});

test('Edita uma disciplina corretamente', async () => {
  render(<Disciplinas />);

  const editarButton = screen.getAllByText('Editar')[0]; // Pega o primeiro botão de editar

  // Mocking do prompt para edição
  global.prompt.mockReturnValueOnce('Matemática Avançada'); // Novo nome
  global.prompt.mockReturnValueOnce('Disciplina avançada de Matemática'); // Nova descrição

  fireEvent.click(editarButton);

  // Espera a edição ser feita
  const novaDescricao = screen.getByText('Disciplina avançada de Matemática');
  expect(novaDescricao).toBeInTheDocument();
});

test('Exclui uma disciplina corretamente', async () => {
  render(<Disciplinas />);

  // Mocking do confirm para simular a confirmação da exclusão
  global.confirm.mockReturnValue(true);

  const excluirButton = screen.getAllByText('Excluir')[0]; // Pega o primeiro botão de excluir
  fireEvent.click(excluirButton);

  // Espera a disciplina ser removida
  await waitFor(() => {
    const disciplinaMatematica = screen.queryByText('Matemática');
    expect(disciplinaMatematica).toBeNull();
  });
});
