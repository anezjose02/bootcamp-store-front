import { useState } from "react";
import PropTypes from 'prop-types';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Formik, Form } from 'formik';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import {CustomFormInput} from "../formik/CustomFormInput";
import {SwalReact} from "../utils/SwalConfig";
import {registerValidations} from "../validations/formValidations";

export const LoginRegister = ({ isUpdate, token }) => {
    const handleUpdateData = () => {
        if (isUpdate) {
            return {

            }
        } else {
            return {
                name: '',
                email: '',
                password: ''
            }
        }
    }
    const [visibleRegister, setVisibleRegister] = useState(false);
    const handleDialogRegister = () => setVisibleRegister(!visibleRegister);
    const handleSubmit = async (values) => {
        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/auth/register',
                {
                    email: values.email.toString(),
                    password: values.password.toString(),
                    name: values.name.toString()
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            handleDialogRegister('false')
            SwalReact.fire({
                icon: 'success',
                title: 'Registro completado',
                showConfirmButton: true,
                timer: 2000,
            }).then(() => {
                window.location.reload();
            })
        } catch (error) {
            console.error('Error al registrarse:', error);
        }
    };
    return (
        <>
            {isUpdate
                ? <div>
                    <img
                        className={'edit-icon'}
                        src={'/assets/Administrador/icons/edit.svg'}
                        onClick={handleDialogRegister}
                    />
                </div>
                : <div className="card flex justify-content-start border-0">
                    <Button
                        type={'button'}
                        onClick={handleDialogRegister}
                        className='login-btn'
                        label="Registrate"
                        raised
                        style={{ whiteSpace: 'nowrap', color: 'black' }}
                    />
                </div>
            }
            <Dialog
                visible={visibleRegister}
                style={{ width: '600px' }}
                onHide={handleDialogRegister}
            >
                <Formik
                    initialValues={handleUpdateData()}
                    onSubmit={handleSubmit}
                    validationSchema={registerValidations}
                >
                    {(formik) => (
                        <Form>
                            <Row className={'mt-2'}>
                                <Col md={12}>
                                    <div className='field mb-4'>
                                        <CustomFormInput
                                            name='name'
                                            placeholder={'Nombre'}
                                        />
                                    </div>
                                </Col>
                                <Col md={12}>
                                    <div className='field mb-4'>
                                        <CustomFormInput
                                            name='email'
                                            type={'email'}
                                            placeholder={'Email'}
                                        />
                                    </div>
                                </Col>
                                <Col md={12}>
                                    <div className='field mb-4'>
                                        <CustomFormInput
                                            name='password'
                                            placeholder={'Contraseña'}
                                            type={'password'}
                                        />
                                    </div>
                                </Col>
                                <div className='field mb-4 mt-4 flex justify-content-center'>
                                    <Button
                                        className='modal-btn'
                                        label={'Guardar'}
                                        type="submit"
                                    />
                                </div>
                            </Row>
                        </Form>
                    )}
                </Formik>
            </Dialog>
        </>
    )
}

LoginRegister.propTypes = {
    isUpdate: PropTypes.bool,
    companiesData: PropTypes.object,
}
