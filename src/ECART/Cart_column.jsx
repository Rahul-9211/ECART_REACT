import react from "react";
import reactDom from "react-dom";

const Cart_column = (props) => {
    return(
    <>
    <tr>
        <th>{props.heading_1}</th>
        <th>{props.heading_2}</th>
        <th>{props.heading_3}</th>
    </tr>
    </>
    );
}
export default Cart_column;