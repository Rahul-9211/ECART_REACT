import react from "react";
import reactDom from "react-dom";

const Product_view_heading = (props) => {
    return(
    <>
    <div class="row row-2">
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
    </div>
    </>
    );
}
export default Product_view_heading;