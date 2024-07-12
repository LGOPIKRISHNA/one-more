import { Link } from "react-router-dom"
function Quckacs(){
 return(
    <div>
        <li><Link to="/home">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/Deals">Deals</Link></li>
            <li><Link to="/Categories">Categories</Link></li>
    </div>
 )   
}
export default Quckacs;