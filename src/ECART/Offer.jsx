import react from "react";
import reactDom from "react-dom";
import Offer_component from "./Offer_component";
import img from "./images/exclusive.png";

const Offer = () => {
    return(
    <>
    <Offer_component
    offer_img ={img}
    heading = "Smart Band f4"
    text = "orem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, commodi, ipsa esse assumenda harum quae fugiat repudiandae, est praesentium rerum laborum fuga! Ea repellendus facilis aliquam. Dolorum minus ex asperiores. Ex vel non aspernatur voluptate voluptatu"
    />
    </>
    );
}
export default Offer;