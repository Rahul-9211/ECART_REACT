import react from "react";
import reactDom from "react-dom";

import Product_row from "./Product_row";
import Product_img_1 from "./images/product-1.jpg";
import Product_img_2 from "./images/product-2.jpg";
import Product_img_3 from "./images/product-3.jpg";
import Product_img_4 from "./images/product-4.jpg";
import Product_img_5 from "./images/product-5.jpg";
import Product_img_6 from "./images/product-6.jpg";
import Product_img_7 from "./images/product-7.jpg";
import Product_img_8 from "./images/product-8.jpg";
import Product_img_9 from "./images/product-9.jpg";
import Product_img_10 from "./images/product-10.jpg";
import Product_img_11 from "./images/product-11.jpg";
import Product_img_12 from "./images/product-12.jpg";

const Navbar = () => {
    return (
        <>
            <div className="small-container">
                <h2 class="title">Todays Deals</h2>
                <Product_row
                    img1={Product_img_1}
                    img2={Product_img_2}
                    img3={Product_img_3}
                    img4={Product_img_4}
                />
                <Product_row
                    img1={Product_img_5}
                    img2={Product_img_6}
                    img3={Product_img_7}
                    img4={Product_img_8}
                />
                <Product_row
                    img1={Product_img_9}
                    img2={Product_img_10}
                    img3={Product_img_11}
                    img4={Product_img_12}
                />
            </div>
        </>
    );
}
export default Navbar;