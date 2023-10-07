import { Link } from "react-router-dom";
import styled from "styled-components";

import 'boxicons';


const ProdutoSelecionado = () => {
    return (
        <>
            <ProdutoContainer>
                <ProdutoBreadcrumbs>
                    <ul>
                        <li>
                            <Link to="/">Início</Link>
                        </li>
                        <li>/</li>
                        <li>
                            <Link to="/produtos">Produtos</Link>
                        </li>
                        <li>/</li>
                        <li>
                            <Link to="/categorias/tenis">Tênis</Link>
                        </li>
                        <li>/</li>
                        <li>
                            <Link to="/categorias/tenis/nike">Nike</Link>
                        </li>
                        <li>/</li>
                        <li>Tênis Nike Revolution 6 Next Nature Masculino</li>
                    </ul>
                </ProdutoBreadcrumbs>
                <ProdutoCarrossel>
                    Carrossel
                </ProdutoCarrossel>
                <ProdutoInfo>
                    <h2>{'Nome do produto'}</h2>
                    <span>{'Casual | Nike | Ref:000000'}</span>
                    <div className="avaliacoes">
                        <div className="estrelas">
                            <box-icon type='solid' name='star'></box-icon>
                            <box-icon type='solid' name='star'></box-icon>
                            <box-icon type='solid' name='star'></box-icon>
                            <box-icon type='solid' name='star'></box-icon>
                            <box-icon name='star'></box-icon>
                        </div>
                        <div className="pontos">
                            4.7 <box-icon type='solid' name='star'></box-icon>
                        </div>
                        <div className="comentarios">{'(90 Avaliações)'}</div>
                    </div>
                </ProdutoInfo>
            </ProdutoContainer>
        </>
    );
}

const ProdutoContainer = styled.div`
    background-color: #f9f8fe;
    padding: 0 100px;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    gap: 0 40px;
`;
const ProdutoBreadcrumbs = styled.div`
    width: 100%;
    margin-top: 20px;
    margin-bottom: 40px;
    & ul{
        display: flex;
        gap: 8px;
        & li{
            font-size: 14px;
            line-height: 22px;
            letter-spacing: .25px;
            color: #474747;
            &:first-child{
                font-weight: bold;
            }
            & a{
                color: currentColor;
            }
        }
    }
`;
const ProdutoCarrossel = styled.div`
    width: 700px;
    border: 1px solid red;
`;
const ProdutoInfo = styled.div`
    flex: 1;
    border: 1px solid blue;

    & h2{
        font-size: 32px;
        line-height: 36px;
        letter-spacing: 1px;
        color: #1f1f1f;
        margin-bottom: 10px;
    }
    & h2 + span{
        font-size: 12px;
        line-height: 18px;
        letter-spacing: .5px;
        color: #666666;
        margin-bottom: 10px;
    }
    & .avaliacoes{
        display: flex;
        & .estrelas{
            display: flex;
            gap: 5px;
            & box-icon{
                font-size: 15px;
                fill: #F6AA1C;
            }
        }
    }
`;

export default ProdutoSelecionado;