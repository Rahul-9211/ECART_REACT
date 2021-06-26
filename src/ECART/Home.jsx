import react from "react";
import reactDom from "react-dom";

import Home_image from "./images/image1.png";

import Home_comp from "./Home_comp";
import Image_hover_row from "./Image_hover_row";
import All_product from "./All_product";
import Offer from "./Offer";
import TodaysDeal from "./TodaysDeal";
import Testimonial from "./Testimonial";
import Client from "./Client";
import Footer from "./Footer";


const Home = (props) => {
    return (
        <>
            <Home_comp
                heading_1="Be Energetic "
                heading_2="A New Journey"
                text_1="Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quod eos enim "
                text_2=" mollitia, blanditiis officiis porro beatae facil"
                btn_text="Explore Now"
                home_image={Home_image} />

            <Image_hover_row />

            <All_product />

            <Offer />

            <TodaysDeal />

            <Testimonial />

            <Client />

            <Footer />
        </>
    );
}
export default Home;