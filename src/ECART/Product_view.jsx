import react from "react";
import reactDom from "react-dom";
import Product_view_details from "./Product_view_details";
import Product_view_img from "./Product_view_img";
import img from "./images/gallery-1.jpg";
import img1 from "./images/gallery-2.jpg";
import img2 from "./images/gallery-3.jpg";
import img3 from "./images/gallery-4.jpg";
import Product_view_heading from "./Product_view_heading";
import Product_row from "./Product_row";
import img5 from "./images/product-5.jpg";
import img6 from "./images/product-6.jpg";
import img7 from "./images/product-7.jpg";
import img8 from "./images/product-8.jpg";
import Footer from "./Footer";

const Product_view = () => {
    return (
        <>
            <div className="small-container single-product">
                <div className="row">
                    <div className="col-2">
                        <Product_view_img
                            img={[img, img1, img2, img3]}
                        />
                    </div>

                    <div className="col-2">
                        <Product_view_details
                            name="Home/Tshirt"
                            heading="Red Printed Tshirt"
                            price="$50.00"
                            btn="Add to Cart"
                            heading_2="Product Details "
                            product_text="Easy 30 days return and exchange. Return Policies may vary based on products and promotions. For full details on our Returns Policies, please click here․"
                            size={["Select Size ", "XL", "XXL", "L", "M", "S"]}
                        />
                    </div>

                </div>
            </div>

            <div className="small-container">
                <Product_view_heading
                heading = "Related Product"
                text = "view more"
                />
                <Product_row
                img1 = {img5}
                img2 = {img6}
                img3 = {img7}
                img4 = {img8}/>
            </div>

            <Footer/>
        </>
    );
}
export default Product_view;