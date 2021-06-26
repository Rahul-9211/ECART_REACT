import react from "react";
import reactDom from "react-dom";
import Cart_column from "./Cart_column";
import Cart_row from "./Cart_row";
import Cart_total from "./Cart_total";
import Footer from "./Footer";

import img from "./images/buy-1.jpg";
import img2 from "./images/buy-2.jpg";
import img1 from "./images/buy-3.jpg";

const Cart = () => {
    return (
        <>
            <div class="small-container cart-page">
                <table>
                    <Cart_column
                        heading_1="Product"
                        heading_2="Quantity"
                        heading_3="Subtotal"
                    />
                    <Cart_row
                        img={img}
                        name="Red printed tshirt"
                        price="Price: $50.00"
                        remove="Remove"
                        total_price="$300.00"
                    />
                    <Cart_row
                        img={img2}
                        name="Red printed tshirt"
                        price="Price: $50.00"
                        remove="Remove"
                        total_price="$50.00"
                    />
                    <Cart_row
                        img={img1}
                        name="Red printed tshirt"
                        price="Price: $50.00"
                        remove="Remove"
                        total_price="$50.00"
                    />
                    <Cart_row
                        img={img}
                        name="Red printed tshirt"
                        price="Price: $523.00"
                        remove="Remove"
                        total_price="$53.00"
                    />
                </table>
                <Cart_total/>
            </div>
            <Footer/>
        </>
    );
}
export default Cart;