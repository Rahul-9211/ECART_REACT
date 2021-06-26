import react from "react";
import reactDom from "react-dom";

const Cart_total = () => {
    return(
    <>
    <div className="total-price">
        <table>
            <tr>
                <td>Subtotal</td>
                <td>$200.00</td>
            </tr>
            <tr>
                <td>Tax</td>
                <td>$50.00</td>
            </tr>
            <tr>
                <td>Total</td>
                <td>$250.00</td>
            </tr>
        </table>
    </div>
    </>
    );
}
export default Cart_total;