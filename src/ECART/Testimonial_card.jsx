import react from "react";
import reactDom from "react-dom";

const Testimonial_card = (props) => {
    return(
    <>
    <div className="col-3">
        <i className="fa fa-quote-left fa-"></i>
        <p>{props.text}</p>
        <div className="rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-o"></i>
        </div>
        <img src={props.img} alt=""/>
        <h3>{props.name}</h3>
    </div>
    </>
    );
}
export default Testimonial_card;