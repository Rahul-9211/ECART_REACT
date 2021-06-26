import react from "react";
import reactDom from "react-dom";

const Account_img = (props) => {
    return(
    <>
    <div className="col-2">
        <img src={props.img} width="100%"/>
    </div>
    </>
    );
}
export default Account_img;