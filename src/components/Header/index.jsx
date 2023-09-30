import { Link, NavLink } from "react-router-dom";
import './index.css';
import cart from './assets/cart.svg';

const Header = () => {

    return(
        <>
            <header>
                <div className="menu">M</div>
                <div className="logo">
                    <div className="logo-icon"></div>
                    Digital Store
                </div>
                <div className="buscar">
                    <input type="text" placeholder="Pesquisar produto..." />
                    <button></button>
                </div>
                <div className="acoes">
                    <Link to="/cadastro" className="underlined">Cadastre-se</Link>
                    <Link to="/login" className="btn">Entrar</Link>
                    <div className="carrinho">
                        <img src={cart} />
                        <span>2</span>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li><NavLink to="/">Início</NavLink></li>
                        <li><NavLink to="/produtos">Produtos</NavLink></li>
                        <li><NavLink to="/categorias">Categorias</NavLink></li>
                        <li><NavLink to="/meus-pedidos">Meus Pedidos</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;