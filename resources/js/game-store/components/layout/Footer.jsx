import {Link} from 'react-router-dom';
import {Button} from 'primereact/button';
export const Footer = () => {

    return (
        <>
            <div className="footer-container">
                <footer className='footer-flex header-footer-backcolor'>
                    <div>
                        <Link to="/" className={'link'}>
                            <img style={{width: '50%', marginBottom: '2rem'}}
                                 src="/assets/icons/logo-footer.png" alt="logo"/>
                        </Link>
                        <br/>
                    </div>
                    <div>
                        <ul className={'list-footer margin text-black'}>
                            <li className={'fw-700'}>CONTENIDO</li>
                            <div className={'fw-600'}>
                                <Link to="/catalogue" className={'link link-no-underline text-black'}>
                                    <li>Catalogo</li>
                                </Link>
                                <Link to="/auth" className={'link link-no-underline text-black'}>
                                    <li>Login</li>
                                </Link>
                                <Link to="/shopping-cart" className={'link link-no-underline text-black'}>
                                    <li>Carrito</li>
                                </Link>
                                <Link to="/catalogue-add" className={'link link-no-underline text-black'}>
                                    <li>Catalogo Admin</li>
                                </Link>
                                <Link to="/company-add" className={'link link-no-underline text-black'}>
                                    <li>Compañia Admin</li>
                                </Link>
                            </div>
                        </ul>
                    </div>
                </footer>
            </div>
        </>
    );
}
