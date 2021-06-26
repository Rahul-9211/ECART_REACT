import react from "react";
import reactDom from "react-dom";

const Offer_component = (props) => {
    return(
    <>
    <div className="offer">
        <div className="small-container">
            <div className="row">
                <div className="col-2">
                    <img src={props.offer_img} className="offer-img"  alt=""/>
                </div>
                <div className="col-2">
                    <h1>{props.heading}</h1>
                    <small>
                        {props.text}
                    </small>
                    <a href="" className="btn">Buy Now &#8594; </a>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}
export default Offer_component;