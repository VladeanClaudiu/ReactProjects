import HeroImage from '../src/assets/images/photo-grid.png'

export default function Hero() {
    return (
        <section className="hero-section">
            <img src={HeroImage} className="hero-image"></img>
            <h1 className='hero-heading'>Online Experiences</h1>
            <p className='hero-subheading'>
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}