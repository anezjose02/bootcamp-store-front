import { useState } from "react";
import PropTypes from 'prop-types';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Formik, Form } from 'formik';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CustomFormInput } from "../../formik/CustomFormInput";
import axios from 'axios';
import {SwalReact} from "../../utils/SwalConfig";
import {companyValidations} from "../../validations/formValidations";

export const CompaniesAddModal = ({ isUpdate, companiesData, token }) => {
    const handleUpdateData = () => {
        if (isUpdate) {
            return {
                name: companiesData.nombre,
            }
        } else {
            return {
                name: ''
            }
        }
    }
    const [visibleCompanies, setVisibleCompanies] = useState(false);
    const handleDialogCompanies = () => setVisibleCompanies(!visibleCompanies);
    const handleSubmit = async (values) => {
        try {
            const response = await axios.post(
                    'http://127.0.0.1:8000/api/companies/create',
                    { nombre: values.name },
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    }
                )
            handleDialogCompanies('false')
            SwalReact.fire({
                icon: 'success',
                title: 'Compañia registrada',
                showConfirmButton: true,
                timer: 2000,
            }).then(() => {
                window.location.reload();
            })
        } catch (error) {
            console.error('Error al crear la compañía:', error);
        }
    };
    return (
        <>
            {isUpdate
                ? <div>
                    <img
                        className={'edit-icon'}
                        src={'/assets/Administrador/icons/edit.svg'}
                        onClick={handleDialogCompanies}
                    />
                </div>
                : <div className="card flex justify-content-start border-0">
                    <Button
                        onClick={handleDialogCompanies}
                        className='modal-btn'
                        icon="pi pi-plus-circle"
                        label="Agregar compañia"
                        raised
                        style={{ whiteSpace: 'nowrap', color: 'black' }}
                    />
                </div>
            }
            <Dialog
                visible={visibleCompanies}
                style={{ width: '600px' }}
                onHide={handleDialogCompanies}
            >
                <Formik
                    initialValues={handleUpdateData()}
                    onSubmit={handleSubmit}
                    validationSchema={companyValidations}
                >
                    {(formik) => (
                        <Form>
                            <Row className={'mt-2'}>
                                <Col md={12}>
                                    <div className='field mb-4'>
                                        <CustomFormInput
                                            name='name'
                                            placeholder={'Nombre de la compañia'}
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

CompaniesAddModal.propTypes = {
    isUpdate: PropTypes.bool,
    companiesData: PropTypes.object,
}
