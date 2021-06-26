import react from "react";
import reactDom from "react-dom";

const Product_page_selector = (props) => {
    return(
    <>
    <div class="page-btn">
        <span>{props.number[0]}</span>
        <span>{props.number[1]}</span>
        <span>{props.number[2]}</span>
        <span>{props.number[3]}</span>
        <span>{props.number[4]}</span>
        <span>&#8594;</span>
    </div>
    </>
    );
}
export default Product_page_selector;