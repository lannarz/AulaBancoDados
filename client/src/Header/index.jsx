import { Link } from 'react-router-dom';
import '../globals.css';

export default function Header() {
    return (
      <div className='header'>
        <div className='espacamento'>
             <img className= "livro" src="https://cdn-icons-png.flaticon.com/512/171/171322.png"></img>
        </div>

        <div className='lista'>
             <nav>
                <ul className='ul'>
                    <li>Login</li>
                    <li>Cadastrar</li>
                    <li>Favoritos</li>
                </ul>
             </nav>
             </div>
      </div>
    
  
    );
}