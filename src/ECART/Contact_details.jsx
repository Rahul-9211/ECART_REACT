import react from "react";
import reactDom from "react-dom";

const Contact_details = (props) => {
    return(
    <>
    <div className="col-3">
        <div className="main-details">
            <input type="text" placeholder="name"/>
            <input type="email" placeholder="email"/>
            <textarea name="text" id="textarea" cols="30" rows="10" placeholder="message"></textarea>
            <button type="submit" className="btn send">
                {props.btn_text}
            </button>
        </div>
    </div>
    </>
    );
}
export default Contact_details;