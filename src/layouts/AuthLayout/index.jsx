import { Outlet } from "react-router-dom";
import HeaderAuth from "../../components/HeaderAuth";

const AuthLayout = () => {
    return (
        <>
            <HeaderAuth />
            <Outlet />
        </>
    );
}

export default AuthLayout;