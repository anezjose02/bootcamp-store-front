import React, { useState } from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
export const Home = () => {
    const navigate = useNavigate();
    const handleCatalogue = () => {

        navigate(`/catalogue`);

    };
    return(
        <>
            <Container fluid className={"home-cover"}>
                <Row>
                    <Col>
                        <Button className='banner-btn'
                                onClick={handleCatalogue}
                        >
                            Compra ahora!
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
