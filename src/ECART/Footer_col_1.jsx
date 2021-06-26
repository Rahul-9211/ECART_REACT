// import { PinDropSharp } from "@material-ui/icons";
import react from "react";
import reactDom from "react-dom";

const Footer_col_1 = (props) => {
    return(
    <>
    <div className="footer-col-1">
        <h3>{props.heading}</h3>
        <p>{props.text}</p>
        <div className="app-logo">
            <img src={props.img1} />
            <img src={props.img2} />
        </div>
    </div>
    </>
    );
}
export default Footer_col_1;