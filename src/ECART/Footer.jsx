import react from "react";
import reactDom from "react-dom";
import Footer_col_1 from "./Footer_col_1";
import Footer_col_2 from "./Footer_col_2";
import Footer_col_3 from "./Footer_col_3";
import img1 from "./images/play-store.png";
import img2 from "./images/app-store.png";
import img3 from "./images/logo-ecart.png";
import Copyright from "./Copyright";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <Footer_col_1
                            heading="Download Our App"
                            text="Lorem ipsum dolor sit, amet consectetur adipisicing "
                            img1={img1}
                            img2={img2}
                        />
                        <Footer_col_2
                            img3={img3}
                            text="Lorem ipsum dolor sit, amet consectetur adipisicing yegfyge ewefwef wuygwf fvdfb uyjujyu thyht "
                        />
                        <Footer_col_3
                            heading="Useful Links"
                            list={["Coupouns", "Blog Post", "Return Policy", "Join Us"]}
                        />
                        <Footer_col_3
                            heading="Follow Us"
                            list={["FAcebook", "Instagram", "Twitter", "Linked IN"]}
                        />
                    </div>
                    <Copyright />
                </div>
            </div>
        </>
    );
}
export default Footer;