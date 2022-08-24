import Logo from '../assets/react-icon-small.png'

export default function NavBar(props){
    return(
        <nav className={props.darkMode? "dark" : ""}>
            <img className="react-logo" src={Logo} />
            <h3>What is React?</h3>
            <div className="toggler">
                <p className="toggler-light">Light</p>
                <div className="toggler-slider" onClick={props.toggleMode}>
                    <div className="toggler-slider-circle"></div>
                </div>
                <p className="toggler-dark">Dark</p>
            </div>
        </nav>
    )
}