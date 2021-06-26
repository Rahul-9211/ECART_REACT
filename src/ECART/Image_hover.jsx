import react from "react";
import reactDom from "react-dom";
import category_1 from "./images/category-1.jpg"

const Image_hover = (props) => {
    return(
    <>
    <div class="col-3 img-hover-zoom">
        <img src={props.img_link} alt="cant load"/>
    </div>
    </>
    );
}
export default Image_hover;