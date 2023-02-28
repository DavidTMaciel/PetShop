import { Link } from 'react-router-dom';
import './style.css'



export default function Topo() {


    return (
        <header className='topo'>
            <img src="assets/logo.png" alt='logo'></img>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='servicos'>Serviço</Link>

            </nav>

        </header>
    )
}

