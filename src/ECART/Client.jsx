import react from "react";
import reactDom from "react-dom";
import Client_component from "./Client_component";
import client_1 from "./images/logo-cadbury.png";
import client_2 from "./images/logo-coca-cola.png";
import client_3 from "./images/logo-mars.png";
import client_4 from "./images/kitkat.png";
import client_5 from "./images/logo-snikers.png";

const Client = () => {
    return(
    <>
    <div className="brands">
        <div className="small-container">
            <div className="row">
                <Client_component img = {client_1}/>
                <Client_component img = {client_2}/>
                <Client_component img = {client_3}/>
                <Client_component img = {client_4}/>
                <Client_component img = {client_5}/>
            </div>
        </div>
    </div>
    </>
    );
}
export default Client;