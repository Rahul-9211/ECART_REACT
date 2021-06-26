import react from "react";
import reactDom from "react-dom";
import Image_hover from "./Image_hover";
import category_1 from "./images/category-1.jpg"
import category_2 from "./images/category-2.jpg"
import category_3 from "./images/category-3.jpg"

const Image_hover_row = () => {
    return(
    <>
    <div class="categories">
        <div class="small-container">
            <div class="row">
                <Image_hover img_link={category_1}/>
                <Image_hover img_link={category_2}/>
                <Image_hover img_link={category_3}/>
            </div>
        </div>
    </div>
    </>
    );
}
export default Image_hover_row;