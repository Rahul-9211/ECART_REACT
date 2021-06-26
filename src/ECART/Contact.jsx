import react from "react";
import reactDom from "react-dom";
import Contact_details from "./Contact_details";
import Contact_img from "./Contact_img";
import Footer from "./Footer";
import img from "./images/humaaan.svg";

const Contact = () => {
    return(
    <>
    <div className="contact">
        <div className="small-container">
        <h2 className="title">Contact Us</h2>
            <div className="row">
                <Contact_img img = {img}/>
                <Contact_details btn_text = "SEND"/>
            </div>
        </div>
    </div>
    <Footer/>
    </>
    );
}
export default Contact;