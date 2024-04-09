import {Link} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useNavigate} from "react-router-dom";
export const CardShoppingCard = ({infoGame, img}) => {
    const navigate = useNavigate();
    const handleDetailsClick = () => {

        navigate(`/catalogue/1/details`);
    };
    return (
        <div className="landing-card">
            <Row>
                <Col md={6}>
                    <img className={'d-flex justify-content-center landing-image-show-more'}
                         src={img}
                         alt="catalogue-img"
                    />
                </Col>
                <Col md={6}>
                    <Row>
                        <Col md={6}>
                            <p className="landing-location">
                                {infoGame.company_id}
                            </p>
                        </Col>
                        <Col md={6}>
                            <p className="landing-location">
                                {infoGame.price}$
                            </p>
                        </Col>
                        <Col md={12}>
                            <p className="landing-location">
                                {infoGame.name}
                            </p>
                        </Col>
                        <Col md={12}>
                            <p className="landing-location">
                                teen
                            </p>
                        </Col>
                        <Col md={12}>
                            <p className="landing-location">
                                actions
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};
