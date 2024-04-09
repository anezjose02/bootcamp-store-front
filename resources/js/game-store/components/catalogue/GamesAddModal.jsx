import { useState } from "react";
import PropTypes from 'prop-types';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Formik, Form } from 'formik';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {CustomFormInput, CustomFormSelectService} from "../../formik/CustomFormInput";
import axios from 'axios';
import {SwalReact} from "../../utils/SwalConfig";
import {gamesValidations} from "../../validations/formValidations";

export const GamesAddModel = ({ isUpdate, gamesData, token, companies }) => {

    const handleUpdateData = () => {
        if (isUpdate) {
            return {
                name: gamesData.nombre,
            }
        } else {
            return {
                name: '',
                company_id: '',
                price: '',
                stock: ''
            }
        }
    }
    const [visibleGames, setVisibleGames] = useState(false);
    const handleDialogGames = () => setVisibleGames(!visibleGames);
    const handleSubmit = async (values) => {
        try {
            const response = await axios.post(
                    'http://127.0.0.1:8000/api/games/create',
                    {
                        nombre: values.name,
                        company_id: values.company_id,
                        price: values.price,
                        stock: values.stock
                    },
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    }
                )
            handleDialogGames('false')
            SwalReact.fire({
                icon: 'success',
                title: 'Juego Registrado',
                showConfirmButton: true,
                timer: 2000,
            }).then(() => {
                window.location.reload();
            })
        } catch (error) {
            console.error('Error al crear el juego:', error);
        }
    };
    return (
        <>
            {isUpdate
                ? <div>
                    <img
                        className={'edit-icon'}
                        src={'/assets/Administrador/icons/edit.svg'}
                        onClick={handleDialogGames}
                    />
                </div>
                : <div className="card flex justify-content-start border-0">
                    <Button
                        onClick={handleDialogGames}
                        className='modal-btn'
                        icon="pi pi-plus-circle"
                        label="Agregar juego"
                        raised
                        style={{ whiteSpace: 'nowrap', color: 'black' }}
                    />
                </div>
            }
            <Dialog
                visible={visibleGames}
                style={{ width: '600px' }}
                onHide={handleDialogGames}
            >
                <Formik
                    initialValues={handleUpdateData()}
                    onSubmit={handleSubmit}
                    validationSchema={gamesValidations}
                >
                    {(formik) => (
                        <Form>
                            <Row className={'mt-2'}>
                                <Col md={6}>
                                    <div className='field mb-4'>
                                        <CustomFormInput
                                            name='name'
                                            placeholder={'Nombre'}
                                        />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className='field mb-4'>
                                        <CustomFormSelectService
                                            name='company_id'
                                            options={companies}
                                        />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className='field mb-4'>
                                        <CustomFormInput
                                            name='price'
                                            placeholder={'Precio'}
                                        />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className='field mb-4'>
                                        <CustomFormInput
                                            name='stock'
                                            placeholder={'Stock'}
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

GamesAddModel.propTypes = {
    isUpdate: PropTypes.bool,
    gamesData: PropTypes.object,
}
