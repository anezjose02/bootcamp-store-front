import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Col, Container, Row } from "react-bootstrap";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {CompaniesAddModal} from "./CompaniesAddModal";

export const CompaniesAdd = () => {
    const [userData, setUserData] = useState(null);
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            const userDataObject = JSON.parse(storedUserData);
            setUserData(userDataObject);
            companyQuery(userDataObject);
        }
    }, []);

    const companyQuery = async (userData) => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/companies/all', {
                headers: {
                    'Authorization': `Bearer ${userData.access_token}`,
                    'Content-Type': 'application/json'
                }
            });
            setCompanies(response.data);
        } catch (error) {
            console.error('Error al obtener las compañías:', error);
        }
    };

    const token = userData?.access_token;
    const rowsPerPageOptions = [5, 10, 20];
    return (
        <>
            <Container fluid>
                <Row className="mt-2 bg-gray-light p-3 rounded-4 h-100 d-flex flex-column">
                    <Col md={12} className='d-flex justify-content-end'>
                        <CompaniesAddModal
                            token={token}
                        />
                    </Col>
                    <Col>
                        <DataTable
                            emptyMessage="Cargando..."
                            stripedRows={false}
                            rowsPerPageOptions={rowsPerPageOptions}
                            rows={5}
                            rowClassName="custom-row-style"
                            tableStyle={{minWidth: '50rem'}}
                            value={companies.data}
                        >

                            <Column
                                field="id"
                                header="ID"
                                bodyStyle={{whiteSpace: 'nowrap'}}
                            />

                            <Column
                                field="nombre"
                                header="Nombre"
                                bodyStyle={{whiteSpace: 'nowrap'}}
                            />
                        </DataTable>
                    </Col>
                </Row>
            </Container>
            <br/>
            <br/>
            <br/>
        </>
    );
};
