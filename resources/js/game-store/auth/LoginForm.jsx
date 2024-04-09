import { useState } from 'react';
import { Button } from 'primereact/button';
import { Formik, Form } from 'formik';
import { CustomFormInput } from "../formik/CustomFormInput";
import axios from "axios";
import {LoginRegister} from "./LoginRegister";
import {SwalReact} from "../utils/SwalConfig";
export const LoginForm = () => {
    const [error, setError] = useState(null);

    const handleData = () => ({
        email: '',
        password: '',
    });

    const handleSubmit = async (values) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/auth/login', {
                email: values.email,
                password: values.password
            });
            const userData =response?.data;
            localStorage.setItem('userData', JSON.stringify(userData));
            SwalReact.fire({
                icon: 'success',
                title: 'Sesion iniciada',
                showConfirmButton: true,
                timer: 2000,
            }).then(() => {
                window.location.href = '/';
            })
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <>
            <Formik
                initialValues={handleData()}
                onSubmit={handleSubmit}
            >
                {(formik) => (
                    <Form className='forms'>
                        <div className='field mb-4' style={{width: '100%'}}>
                            <CustomFormInput label='Correo electrónico' name='email' type='text'/>
                        </div>
                        <div className='field mb-4' style={{width: '100%'}}>
                            <CustomFormInput label='Contraseña' name='password' type='password'/>
                        </div>
                        <div className='field my-5 flex justify-content-center'>
                            <Button
                                className='login-btn'
                                label="INICIAR SESIÓN"
                                rounded
                                severity="warning"
                                type="submit"
                            />
                        </div>
                        {error && <div className="text-red-500">{error}</div>}
                        <div className='field my-5 flex justify-content-center'>
                            <LoginRegister/>
                        </div>
                    </Form>

                )}
            </Formik>

        </>
    )
}
