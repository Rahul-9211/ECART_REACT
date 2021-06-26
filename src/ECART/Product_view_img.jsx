import react, { useState } from "react";
import reactDom from "react-dom";

const Navbar = (props) => {
    const [main_img,set_main_img] = useState(props.img[0]);
    return(
    <>
    <img src={main_img}alt="" width="100%" id="productImg"/>
    <div class="small-img-row">
        <div class="small-img-col">
            <img src={props.img[1]} onClick={()=>{set_main_img(props.img[1])}} alt="" width="100%" class="small-img"/>
        </div>
        <div class="small-img-col">
            <img src={props.img[2]} onClick={()=>{set_main_img(props.img[2])}} alt="" width="100%" class="small-img"/>
        </div>
        <div class="small-img-col">
            <img src={props.img[3]} onClick={()=>{set_main_img(props.img[3])}} alt="" width="100%" class="small-img"/>
        </div>
        <div class="small-img-col">
            <img src={props.img[0]} onClick={()=>{set_main_img(props.img[0])}} alt="" width="100%" class="small-img"/>
        </div>
    </div>
    </>
    );
}
export default Navbar;