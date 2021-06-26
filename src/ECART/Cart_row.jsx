// import { PinDropSharp } from "@material-ui/icons";
import react, { useState } from "react";
import reactDom from "react-dom";

const Cart_row = (props) => {
    // const [value ,setvalue] = useState("0");
    return (
        <>
            <tr>
                <td>
                    <div class="cart-info">
                        <img src={props.img} alt="" />
                        <div>
                            <p>{props.name}</p>
                            <small>{props.price}</small>
                            <br />
                            <a href="">{props.remove}</a>
                        </div>
                    </div>
                </td>
                <td><input type="number" value="1"/></td>
                <td>{props.total_price}</td>
            </tr>
        </>
    );
}
export default Cart_row;