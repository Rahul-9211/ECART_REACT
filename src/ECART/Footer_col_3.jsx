import react from "react";
import reactDom from "react-dom";

const Footer_col_3 = (props) => {
    return(
    <>
    <div class="footer-col-3">
        <h3>{props.heading}</h3>
        <ul>
            <li>{props.list[0]}</li>
            <li>{props.list[1]}</li>
            <li>{props.list[2]}</li>
            <li>{props.list[3]}</li>
        </ul>
    </div>
    </>
    );
}
export default Footer_col_3;