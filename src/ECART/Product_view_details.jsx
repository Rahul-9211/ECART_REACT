import react from "react";
import reactDom from "react-dom";
import { NavLink } from "react-router-dom";

const Product_view_details = (props) => {
    return (
        <>
            <p>{props.name}</p>
            <h1>{props.heading}</h1>
            <h4>{props.price}</h4>
            <select >
                <option>{props.size[0]}</option>
                <option>{props.size[1]}</option>
                <option>{props.size[2]}</option>
                <option>{props.size[3]}</option>
                <option>{props.size[4]}</option>
                <option>{props.size[5]}</option>
            </select>
            <input type="number" value="1" />
            <NavLink to="/cart" className="btn">{props.btn}</NavLink>
            <br />
            <h3>{props.heading_2}
                <i className="fa fa-indent"></i>
            </h3>
            <p>{props.product_text}</p>
        </>
    );
}
export default Product_view_details;