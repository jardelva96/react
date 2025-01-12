import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Disciplinas from './Disciplinas';

test('Exibe as disciplinas corretamente', () => {
  render(<Disciplinas />);

  const matematica = screen.getByText('Matemática');
  const fisica = screen.getByText('Física');
  const quimica = screen.getByText('Química');

  expect(matematica).toBeInTheDocument();
  expect(fisica).toBeInTheDocument();
  expect(quimica).toBeInTheDocument();
});

test('Calcula a média corretamente', () => {
  render(<Disciplinas />);

  // Verificando a média da Matemática
  const matematicaMedia = screen.getByText('Média: 8.17');
  expect(matematicaMedia).toBeInTheDocument();

  // Verificando a média da Física
  const fisicaMedia = screen.getByText('Média: 7.00');
  expect(fisicaMedia).toBeInTheDocument();

  // Verificando a média da Química
  const quimicaMedia = screen.getByText('Média: 9.75');
  expect(quimicaMedia).toBeInTheDocument();
});

test('Adiciona uma nova disciplina corretamente', async () => {
  render(<Disciplinas />);

  // Mocking o prompt para simular a entrada do nome e descrição
  window.prompt = jest.fn()
    .mockReturnValueOnce('Biologia')  // Nome da nova disciplina
    .mockReturnValueOnce('Estudos biológicos'); // Descrição da nova disciplina

  // Simulando o clique no botão de adicionar disciplina
  const btnAddDisciplina = screen.getByText('Adicionar Disciplina');
  fireEvent.click(btnAddDisciplina);

  // Esperando que a nova disciplina seja exibida
  await waitFor(() => {
    const novaDisciplina = screen.getByText('Biologia');
    expect(novaDisciplina).toBeInTheDocument();
  });
});

test('Adiciona uma nota corretamente', async () => {
  render(<Disciplinas />);

  // Pegando o input da disciplina de Matemática
  const inputNotas = screen.getAllByPlaceholderText('Adicionar nota');

  // Simulando a adição de uma nova nota na primeira disciplina (Matemática)
  fireEvent.change(inputNotas[0], { target: { value: '9' } });
  fireEvent.keyDown(inputNotas[0], { key: 'Enter' });

  // Esperando que a nota seja adicionada ao DOM
  await waitFor(() => {
    expect(screen.getByText('Nota 1: 8')).toBeInTheDocument();
    expect(screen.getByText('Nota 2: 9')).toBeInTheDocument();
    expect(screen.getByText('Nota 3: 7.5')).toBeInTheDocument();
    expect(screen.getByText('Nota 4: 9')).toBeInTheDocument(); // Nova nota
  });
});
