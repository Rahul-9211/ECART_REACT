import react from "react";
import reactDom from "react-dom";
import "./Style.css";
import {Switch , Route , Redirect} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Product from "./Product";
import About from "./About";
import Contact from "./Contact";
import Account from "./Account";
import Cart from "./Cart";
import Product_view from "./Product_view";

const App = () => {
    return(
    <>
    <Navbar />
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/product" component={Product}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/account" component={Account}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/product_detail" component={Product_view}/>
        <Redirect to = "/"/>
    </Switch>
    </>
    );
}
export default App;