import react from "react";
import reactDom from "react-dom";
import { NavLink } from "react-router-dom";

const Product_card = (props) => {
    return(
    <>
    <div className="col-4">
        <NavLink to="/product_detail">
            <img src={props.img_link} alt="cant Load"/>
        </NavLink>
        <h4>{props.product_name}</h4>
        <div className="rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-o"></i>
        </div>
        <p>{props.product_price}</p>
    </div>
    </>
    );
}
export default Product_card;