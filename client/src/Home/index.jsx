import { Link } from 'react-router-dom';
import '../globals.css';
import Header from '../Header';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Footer from '../Footer';



export default function Home() {
    return (
     
<div>
    
        <Header/>

        <>
        <div>
        <Carousel
                infiniteLoop
                useKeyboardArrows
                autoPlay
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                dynamicHeight
            >
               <div>
                    <img src="https://images-americanas.b2w.io/spacey/acom/2023/08/09/HI-LIVROS-07_08-DESK-02-c49ddaa74d97.png"/>
               </div> 
               <div>
                    <img src="https://images-americanas.b2w.io/spacey/acom/2023/06/06/351546030_928388051705647_1869978718308600123_n-43dcf487b361.png"/>
               </div>
               <div>
                    <img src="https://images-americanas.b2w.io/spacey/acom/2023/05/16/01-DESK-475591e4927a.png"/>
               </div>  
            </Carousel>

        <div className='container'>

        
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
            <Footer/>
    </> 
    </div>  
    )
}
