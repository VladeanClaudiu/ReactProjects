import globe from '../src/assets/globe.svg'

export default function Navbar() {
    return (
        <nav className="nav-section">
            <div className='nav-content'>
               <img src={globe} alt="globe" /> 
                <p>my travel journal</p> 
            </div>
        </nav>
    )
}