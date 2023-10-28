import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/publicPages/HomePage';
import ProdutosPage from '../pages/publicPages/ProdutosPage';
import CategoriasPage from '../pages/publicPages/CategoriasPage';
import MeusPedidosPage from '../pages/publicPages/MeusPedidosPage';
import PageLayout from '../layouts/PageLayout';
import NotFoundPage from '../pages/publicPages/NotFoundPage';
import ProdutoSelecionado from '../pages/publicPages/ProdutosPage/ProdutoSelecionado';
import AuthLayout from '../layouts/AuthLayout';
import LoginPage from '../pages/authPages/LoginPage';
import AdminLayout from '../layouts/AdminLayout';
import PageHome from '../pages/adminPages/PageHome';
import PageUsers from '../pages/adminPages/PageUsers';
import ProtectRoute from './ProtectRoute';

const Ways = () => {
    
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<PageLayout />}>
                        <Route index element={<HomePage />} />
                        <Route path='/produtos' element={<ProdutosPage />} />
                        <Route path='/produtos/produto' element={<ProdutoSelecionado />} />
                        <Route path='/categorias' element={<CategoriasPage />} />
                        <Route path='/meus-pedidos' element={<MeusPedidosPage />} />
                    </Route>

                    <Route path='/login' element={<AuthLayout />}>
                        <Route index element={<LoginPage />} />
                    </Route>


                    <Route path='/dashboard' element={
                        <ProtectRoute>
                            <AdminLayout />
                        </ProtectRoute>
                    }>
                        <Route index element={<PageHome />} />
                        <Route path='/dashboard/usuarios' element={<PageUsers />} />
                    </Route>

                    <Route path='*' element={<NotFoundPage/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Ways;