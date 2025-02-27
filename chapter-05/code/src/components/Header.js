import { LOGO_URL } from "../utils/constants";

const Header=()=>{
    return (
        <div className="header-container">
            <div className="brand-logo">
                <img src={LOGO_URL} alt="brand logo"/>
                <h3 id="brand-name">Crave<span>Cart</span></h3>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;