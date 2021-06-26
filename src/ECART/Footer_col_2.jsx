import react from "react";
import reactDom from "react-dom";

const Footer_col_3 = (props) => {
    return(
    <>
    <div class="footer-col-2">
        <img src={props.img3} alt="can't load"/>
        <p>{props.text}</p>
    </div>
    </>
    );
}
export default Footer_col_3;