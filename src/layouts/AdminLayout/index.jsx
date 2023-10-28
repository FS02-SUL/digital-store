import { Outlet } from "react-router-dom";
import HeaderAdmin from "../../components/HeaderAdmin";

const AdminLayout = () => {
    return (
        <div className={'flex w-full h-screen'}>
            <HeaderAdmin />
            <main className={'w-full p-6'}>
                <Outlet />
            </main>
        </div>
    );
}

export default AdminLayout;