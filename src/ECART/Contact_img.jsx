import react from "react";
import reactDom from "react-dom";

const Contact_img = (props) => {
    return(
    <>
    <div className="col-3">
        <img src={props.img} alt="" width="500px" height="400px"/>
    </div>
    </>
    );
}
export default Contact_img;