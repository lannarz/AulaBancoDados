import { useEffect, useState } from 'react';
import '../globals.css';

export default function ReadMatriculas() {
  const [matriculas, setMatriculas] = useState([]);


  useEffect(() => {
    const fetchMatriculas = async () => {
      try {
        const response = await fetch('http://localhost:5000/matriculas');
        const data = await response.json();
        setMatriculas(data);
      } catch (error) {
        console.error('Erro ao buscar as matrículas:', error);
      }
    };

    fetchMatriculas();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/matriculas/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {

        setMatriculas(matriculas.filter((matricula) => matricula._id !== id));
        alert('Livro excluído com sucesso!');
      } else {
        alert('Erro ao excluir livro.');
      }
    } catch (error) {
      console.error('Erro ao excluir livro:', error);
    }
  };

  return (
    <div className='container'>
      <h2>Lista de Livros</h2>
      <table  className="table-container" border="1">
        <thead>
          <tr>
            <th>Código Livro</th>
            <th>Nome do Livro</th>
            <th>Autor</th>
            <th>Editora</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {matriculas.map((matricula) => (
            <tr key={matricula._id}>
              <td>{matricula._id}</td>
              <td>{matricula.nome}</td>
              <td>{matricula.autor}</td>
              <td>{matricula.editora}</td>
              <td>
                <button onClick={() => handleDelete(matricula._id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
