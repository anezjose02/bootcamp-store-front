import {Row, Col, Card, Form, Button, Alert} from 'react-bootstrap';
import {LoginForm} from "./LoginForm";

export const Login = () => {
    return (
        <>
            <Row className={"w-100 h-100 overflow-hidden mt-8 mt-4"}>
                <Col className={"d-flex justify-content-center align-items-center"}>
                    <Card className={"overflow-hidden"} style={{width: '85%', borderRadius: '20px', backgroundColor: 'white' }}>
                        <Row className={"h-100"}>
                            <Col xs={{span: 7}}
                                 className={"login-cover"}>
                            </Col>
                            <Col xs={{span: 5}}
                                 className={"d-flex justify-content-center align-items-center"}>
                                <Row className={"h-100"}>
                                    <Col xs={{span: 12}}
                                         className={"d-flex justify-content-center align-items-end"}>
                                        <div>
                                            <h2 className={"text-blue-dark fw-bold"}>INICIAR SESIÓN</h2>
                                        </div>
                                    </Col>
                                    <Col xs={{span: 12}}
                                         className={"d-flex justify-content-center align-items-center"}>
                                        <LoginForm/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
