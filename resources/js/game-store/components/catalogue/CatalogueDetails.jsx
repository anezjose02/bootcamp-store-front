import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {Button} from "react-bootstrap";
import { useLocation } from 'react-router-dom';
export const CatalogueDetails = () => {
    const location = useLocation();
    const dataGame = location.state?.rowData
    const urlImg = '/assets/icons/catalogue-image.jpeg';
    return(
        <Container fluid>
            <Row className="mt-2">
                <Col md={6} className={'mt-2'}>
                    <Row>
                        <Col md={12}>
                            <img className={'d-flex justify-content-center image-property-main'}
                                 src={urlImg}
                                 alt="catalogue-img"
                            />
                        </Col>
                        <Col md={6} className={'mt-4'}>
                            <h6 className={'text-black bold'}>GÉNEROS</h6>
                            <p className={'text-black'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Col>
                        <Col md={6} className={'mt-4'}>
                            <h6 className={'text-black bold'}>CARACTERÍSTICAS</h6>
                            <p className={'text-black'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Col>
                        <Col md={12} className="text-justify">
                            <h6 className={'text-black'}>{dataGame?.description}</h6>
                        </Col>
                    </Row>
                </Col>
                <Col md={4} className={'mt-2'}>
                    <Row>
                        <Col md={12}>
                            <h3 className={'text-black bold'}>{dataGame?.name}</h3>
                        </Col>
                        <Col md={12}>
                            <img style={{width: '40%'}}
                                 src={'/assets/icons/Teen.svg'}
                                 alt="catalogue-img"
                            />
                        </Col>
                        <Col md={12}>
                            <h4 className={'text-black bold'}>{dataGame?.companyName}</h4>
                        </Col>
                        <Col md={12}>
                            <h5 className={'text-black bold'}>{dataGame?.price}$</h5>
                        </Col>
                        <Col md={12}>
                            <Button className='details-game-btn'>
                                Añadir al carrito!
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <br/>
                <br/>
            </Row>
        </Container>
    )
}
