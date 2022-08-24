import Logo from '../assets/react-icon-small.png'

export default function NavBar(){
    return(
        <nav className="react-nav">
            <img className="react-logo" src={Logo} />
            <h3>What is React?</h3>
            <h4>React Project - Project 1</h4>
        </nav>
    )
}