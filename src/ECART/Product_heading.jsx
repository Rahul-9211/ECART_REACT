import react from "react";
import reactDom from "react-dom";

const Product = (props) => {
    return(
    <>
    <div class="row row-2">
        <h2>{props.heading}</h2>
        <select name="" id="">
            <option value="">{props.Option_list[0]}</option>
            <option value="">{props.Option_list[1]}</option>
            <option value="">{props.Option_list[2]}</option>
            <option value="">{props.Option_list[3]}</option>
            <option value="">{props.Option_list[4]}</option>
        </select>
    </div>
    </>
    );
}
export default Product;