import React, {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";
import axios from "axios";
import {SwalReact} from "../../utils/SwalConfig";
export const Header = () => {
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            const userDataObject = JSON.parse(storedUserData);
            setUserData(userDataObject);
        }
    }, []);

    const token = userData?.access_token;

    const handleLogout = async () => {
        try {
            const response = await axios.get(
                'http://127.0.0.1:8000/api/logout',
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            )
            localStorage.removeItem('userData');
            SwalReact.fire({
                icon: 'success',
                title: 'Sesion cerrada',
                showConfirmButton: true,
                timer: 2000,
            }).then(() => {
                window.location.href = '/auth';
            })
        } catch (error) {

        }
    };

    return (
        <div className='container-header header-color'>
            <header className='flex-nav-bar'>
                <NavLink to="/">
                    <img style={{width: '300px', height:'200px'}}
                         src="/assets/icons/logo-header.png" alt="logo"/>
                </NavLink>
                <nav className='tag-nav justify-content-end'>
                    <ul className={'nav-menu'}>
                        <li className='nav-item'>
                            <NavLink to="/" activeclassname='active'
                                     className={'nav-links'}>
                                Home
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="/catalogue" activeclassname='active'
                                     className={'nav-links'}>
                                Catalogo
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="/shopping-cart" activeclassname='active'
                                     className={'nav-links'}>
                                Carrito
                            </NavLink>
                        </li>
                        {userData && userData.access_token ? (
                            <>
                                <li className='nav-item'>
                                    <Button type={'button'}
                                    onClick={handleLogout}>
                                        Logout
                                    </Button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className='nav-item'>
                                    <NavLink to="/auth" activeClassName='active' className={'nav-links'}>
                                        Login
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </header>
        </div>
    );
};
