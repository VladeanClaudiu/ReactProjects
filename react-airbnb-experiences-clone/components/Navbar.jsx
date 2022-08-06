import Logo from "../src/assets/airbnb-logo.png"
export default function Navbar(){
    return ( 
        <nav className="nav-section">
            <img className="nav-logo" src={Logo} alt="logo" />  
        </nav>
    )
}