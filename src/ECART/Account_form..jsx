// import { LocalShippingOutlined } from "@material-ui/icons";
import react, { useState } from "react";
import reactDom from "react-dom";

const Account_form = () => {
    const [login, setlogin] = useState(false);
    const [register, setregister] = useState(false);

    return (
        <>
            <div className="col-2">
                <div className="form-container">
                    <div className="form-btn">
                        <span id={login ? "login" : ""}
                            onClick={() => {
                                setlogin(true)
                                setregister(false)
                            }}
                        >Login</span>
                        <span 
                            onClick={() => {
                                setlogin(false)
                                setregister(true)
                            }}
                        >Register</span>
                        <hr id="indicator" className="classIndicator" />
                    </div>
                    <form action="" id={login ? "loginForm" : {style:{display:"none"}}}>
                        <input type="text" placeholder="username" />
                        <input type="password" placeholder="password" />
                        <button type="submit" className="btn">Login</button>
                        <a href="">Forgot Password</a>
                    </form>
                    <form action="" id={register ? "regForm" : ""}>
                        <input type="text" placeholder="username" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="password" />
                        <button type="submit" className="btn">Register</button>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Account_form;