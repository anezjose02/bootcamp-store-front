import {Link} from 'react-router-dom';
import {useNavigate} from "react-router-dom";
export const CardGamesCatalogue = ({infoGame, img}) => {
    const navigate = useNavigate();
    const handleDetailsClick = (infoGame) => {

        const queryParams = {
            rowData: infoGame
        };
        navigate(`/catalogue/${infoGame.id}/details`, { state: queryParams });
    };
    return (
        <div className="landing-card">
            <img className={'d-flex justify-content-center landing-image'}
                 src={img}
                 alt="catalogue-img"
            />
            <div className="landing-body">
                <p className="landing-location">
                    {infoGame.companyName}
                </p>
                <h3 className="landing-title">{infoGame.name}</h3>
                <p className="landing-location">
                    {infoGame.price}$
                </p>
                <br/>
                <div className="d-flex justify-content-center landing-actions">
                    <div>
                        {/*<Link to={""} className={"link"}>*/}
                        <button onClick={() => handleDetailsClick(infoGame)} className={"landing-btn landing-btn-buy"}>
                            Ver detalles
                        </button>
                        {/*</Link>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};
