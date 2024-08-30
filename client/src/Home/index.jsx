import { Link } from 'react-router-dom';
import '../globals.css';
import Header from '../Header';



export default function Home() {
    return (
     
<div>
        <Header/>
        <div className='container'>

            
            <h2>Biblioteca</h2>
        
            <div className="card-container">
                
                <Link to="/matricula/cadastrar" className="card">
                    <div>Cadastrar Livro</div>
                </Link>
                <Link to="/matriculas" className="card">
                    <div>Lista de Livros</div>
                </Link>
                <Link to="/matriculas/alterar" className="card">
                    <div>Editar Livro</div>
                </Link>
            </div>
            
        </div>
        </div>
    );
}
