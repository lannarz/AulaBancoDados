import { useState } from 'react';
import '../globals.css';
import { useNavigate } from 'react-router-dom';


export default function CreateMatricula() {
  const [nome, setNome] = useState('');
  const [autor, setAutor] = useState('');
  const [editora, setEditora] = useState('');

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const novaMatricula = { nome, autor, editora };

    try {
      const response = await fetch('http://localhost:5000/matriculas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novaMatricula),
      });
      if (response.ok) {
        alert('Livro cadastrado com sucesso!');
        setNome('');
        setAutor('');
        setEditora('');
        navigate("/matriculas");
      } else {
        alert('Erro ao cadastrar livro.');
      }
    } catch (error) {
      console.error('Erro ao cadastrar livro:', error);
    }
  };

  return (
    <div className='container'>
    <form  className="form-container" onSubmit={handleSubmit}>
      <h2>Cadastrar Livro</h2>
      <input
        type="text"
        placeholder="Nome do Livro"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Autor"
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Editora"
        value={editora}
        onChange={(e) => setEditora(e.target.value)}
        required
      />
      <button type="submit">Salvar</button>
    </form>
    </div>
  );
}
