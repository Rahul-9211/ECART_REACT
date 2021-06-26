import react from "react";
import reactDom from "react-dom";

const Copyright = () => {
    const year = new Date().getFullYear();
    return(
    <>
    <hr/>
    <p className="copyright">Copyright &copy; {year} - By Rahul Rawat</p>
    </>
    );
}
export default Copyright;