import react from "react";
import reactDom from "react-dom";
import img from "./images/image1.png";
import Account_img from "./Account_img";
import Account_form from "./Account_form.";
import Footer from "./Footer";

const Account = () => {
    return (
        <>
            <div className="account-page">
                <div className="container">
                    <div className="row">
                        <Account_img img={img} />
                        <Account_form />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Account;