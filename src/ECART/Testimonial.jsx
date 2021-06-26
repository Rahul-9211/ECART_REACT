import react from "react";
import reactDom from "react-dom";
import Testimonial_card from "./Testimonial_card";
import user_1 from "./images/user-1.png";
import user_2 from "./images/user-2.png";
import user_3 from "./images/user-3.png";

const Navbar = () => {
    return(
    <>
    <div className="testimonial">
        <div className="small-container">
            <h2 className="title">Happy Client</h2>
            <div className="row">
                <Testimonial_card
                text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat corrupti harum esse autem unde. Repellendus, sed reiciendis deserunt recusandae itaque at consequuntur animi debitis nostrum quae, nisi voluptatem deleniti mollitia."
                img = {user_1}
                name = "Sonia Bass"
                />
                <Testimonial_card
                text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat corrupti harum esse autem unde. Repellendus, sed reiciendis deserunt recusandae itaque at consequuntur animi debitis nostrum quae, nisi voluptatem deleniti mollitia."
                img = {user_2}
                name = "Randy Aurtun"
                />
                <Testimonial_card
                text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat corrupti harum esse autem unde. Repellendus, sed reiciendis deserunt recusandae itaque at consequuntur animi debitis nostrum quae, nisi voluptatem deleniti mollitia."
                img = {user_3}
                name = "Samule"
                />
            </div>
        </div>
    </div>
    </>
    );
}
export default Navbar;