import React, { useEffect, useState } from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import { CardGamesCatalogue } from '../cards/CardGamesCatalogue';
import axios from 'axios';
import { CustomFormInput, CustomFormSelectService } from '../../formik/CustomFormInput';

export const Catalogue = () => {
    const [userData, setUserData] = useState(null);
    const [games, setGames] = useState([]);
    const [gamesCompanies, setGamesCompanies] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCompany, setSelectedCompany] = useState('');

    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            const userDataObject = JSON.parse(storedUserData);
            setUserData(userDataObject);
            gamesQuery(userDataObject);
            companyQuery(userDataObject);
            gamesCompanyQuery(userDataObject);
        }
    }, []);

    const gamesCompanyQuery = async (userData) => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/company-games', {
                headers: {
                    Authorization: `Bearer ${userData.access_token}`,
                    'Content-Type': 'application/json',
                },
            });
            setGamesCompanies(response.data);
        } catch (error) {
            console.error('Error al obtener los juegos:', error);
        }
    };

    const gamesQuery = async (userData) => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/games/all', {
                headers: {
                    Authorization: `Bearer ${userData.access_token}`,
                    'Content-Type': 'application/json',
                },
            });
            setGames(response.data);
        } catch (error) {
            console.error('Error al obtener los juegos:', error);
        }
    };

    const companyQuery = async (userData) => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/companies/all', {
                headers: {
                    Authorization: `Bearer ${userData.access_token}`,
                    'Content-Type': 'application/json',
                },
            });
            setCompanies(response.data);
        } catch (error) {
            console.error('Error al obtener las compañías:', error);
        }
    };

    const gamesCompaniesResult = gamesCompanies?.data;
    const gamesResult = games?.data;
    const companiesResult = companies?.data;

    let gamesData = [];

    if (gamesResult && companiesResult && gamesCompaniesResult) {
        gamesData = gamesCompaniesResult.map((gameCompany) => {
            const company = companiesResult.find((company) => company.id === gameCompany.company_id);
            const game = gamesResult.find((game) => game.id === gameCompany.game_id);
            return {
                id: gameCompany.id,
                name: game ? game.nombre : 'Nombre desconocido',
                price: gameCompany.price,
                company_id: gameCompany.company_id,
                companyName: company ? company.nombre : 'Compañía desconocida',
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis rhoncus urna neque viverra. A pellentesque sit amet porttitor eget dolor morbi. Euismod quis viverra nibh cras pulvinar mattis nunc. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Justo laoreet sit amet cursus sit amet dictum sit amet. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Ut venenatis tellus in metus. Vitae sapien pellentesque habitant morbi tristique. Tincidunt ornare massa eget egestas purus. Tellus elementum sagittis vitae et leo duis ut diam. Congue eu consequat ac felis. Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Arcu non sodales neque sodales. Elementum integer enim neque volutpat. Faucibus pulvinar elementum integer enim neque volutpat.\n" +
                    '\n',
            };
        });
    } else {
    }

    const urlImg = '/assets/icons/catalogue-image.jpeg';

    const filteredGames = gamesData.filter((game) => {
        const searchTermMatch =
            game.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            game.companyName.toLowerCase().includes(searchTerm.toLowerCase());
        const companyMatch = selectedCompany === '' || game.companyName === selectedCompany;
        return searchTermMatch && companyMatch;
    });

    console.log(filteredGames)

    return (
        <Container fluid>
            <Row className="mt-8">
                <Col md={12} className={'mt-2'}>
                    <Row>
                        <Col md={3}>
                            <input
                                className='w-full p-inputtext p-component  '
                                name="name"
                                placeholder={'Buscar'}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </Col>
                        <Col md={3}>
                            <select
                                className='w-full p-inputtext p-component  '
                                value={selectedCompany}
                                onChange={(e) => setSelectedCompany(e.target.value)}
                            >
                                <option value="">Todas las compañías</option>
                                {companiesResult &&
                                    companiesResult.map((company) => (
                                        <option key={company.id} value={company.nombre}>
                                            {company.nombre}
                                        </option>
                                    ))}
                            </select>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="mt-4">
                {filteredGames.length === 0 ? (
                    <Col md={12}>
                        <Button onClick={() => window.location.href = '/auth'}>Inicia sesion ahora!!</Button>
                    </Col>
                ) : (
                    filteredGames.map((game, index) => (
                        <Col key={index} md={4} className="mb-4">
                            <CardGamesCatalogue infoGame={game} img={urlImg} />
                        </Col>
                    ))
                )}
            </Row>
            <br />
            <br />
            <br />
            <br />
        </Container>
    );
};
