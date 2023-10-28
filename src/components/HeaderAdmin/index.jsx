import { Link } from "react-router-dom";

const HeaderAdmin = () => {
    return (
        <div className="w-2 surface-200">
            <div className="logo surface-900 p-3">
                <img 
                    src="https://digitalcollege.com.br/wp-content/webp-express/webp-images/uploads/2022/05/logo-digital.png.webp"
                    alt="Digital College"
                    className="w-full"
                />
            </div>
            <nav>
                <ul>
                    <li className={'p-3'}>
                        <Link
                            to={'/dashboard'}
                            className={'flex align-items-center gap-2 text-color hover:text-primary'}
                        >
                            <i className={'pi pi-home'}></i> Dashboard
                        </Link>
                    </li>
                    <li className={'p-3'}>
                        <Link
                            to={'/dashboard/usuarios'}
                            className={'flex align-items-center gap-2 text-color hover:text-primary'}
                        >
                            <i className={'pi pi-users'}></i> Usuários
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default HeaderAdmin;