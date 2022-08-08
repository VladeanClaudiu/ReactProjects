import pin from '../src/assets/pin.svg'

export default function Location(props) {
    const {key, title, location, googleMapsUrl, startDate, endDate, description, imageUrl} = props.location;
    return (
        <section className="location-card">
            <div className="location-image">
                <img src={imageUrl} alt="image of location" />
            </div>
            <div className="location-information">
                <div className="location-title-info">
                    <div className='location-title'>
                        <img src={pin} alt="location logo" />
                        <p>{location}</p>
                        <a href={googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h1>{title}</h1>
                </div>
                <div className="location-visit-date-info">
                    <h4>{startDate} - {endDate}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </section>
    )
}