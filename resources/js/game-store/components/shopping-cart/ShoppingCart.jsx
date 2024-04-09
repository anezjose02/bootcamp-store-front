import React, { useState } from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
export const ShoppingCart = () => {
    const navigate = useNavigate();
    const handleCatalogue = () => {

        navigate(`/catalogue`);

    };
    return(
        <>
            <Container fluid className={"shopping-cover"}>
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
