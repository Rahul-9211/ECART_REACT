import react from "react";
import reactDom from "react-dom";

const Client_component = (props) => {
    return(
    <>
    <div className="col-5">
        <img src={props.img} alt="can't Load"/>
    </div>
    </>
    );
}
export default Client_component;