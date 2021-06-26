import react from "react";
import reactDom from "react-dom";
import Product_card from "./Product_card";
import json from "./Json.json";

const Product_row = (props) => {
    return(
    <>
    <div className="row">
        <Product_card 
        img_link={props.img1}
        product_name={json[0].product_name}
        product_price={json[0].product_price}/>
        <Product_card 
        img_link={props.img2}
        product_name={json[1].product_name}
        product_price={json[1].product_price}/>
        <Product_card 
        img_link={props.img3}
        product_name={json[2].product_name}
        product_price={json[2].product_price}/>
        <Product_card 
        img_link={props.img4}
        product_name={json[3].product_name}
        product_price={json[3].product_price}/>
    </div>
    </>
    );
}
export default Product_row;