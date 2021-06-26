import react from "react";
import reactDom from "react-dom";
import {NavLink} from "react-router-dom";

const Home_comp = (props) => {
    return (
        <>
            <div className="header">
                <div className="row">
                    <div className="col-2">
                        <h1>{props.heading_1} <br /> {props.heading_2}</h1>
                        <p>{props.text_1}<br />{props.text_2}</p>
                        <NavLink to="/product" className="btn">{props.btn_text}&#8594;</NavLink>
                    </div>
                    <div className="col-2">
                        <img src={props.home_image} alt="can't Load" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home_comp;