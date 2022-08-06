export default function Card(props){
    const {openSpots, image, rating, reviewCount, location, title, price} = props;
    return (
        <div className="card">
            {openSpots != null ? <div className="card-available">{openSpots ? <p>AVAILABLE</p> : <p>SOLD OUT</p>}</div> : null}    
            <img src={'../src/assets/images/'+image} alt="card image" className="card-image" />
            <div className="card-info">
                <img src="../src/assets/star.png" className="card-star" />
                <span>{rating}</span>
                <span className="card-accent-gray">({reviewCount}) •</span>
                <span className="card-accent-gray">{location}</span>
            </div>
            <p className="card-title">{title}</p>
            <p><span className="card-price-bold">From ${price}</span> / person</p>
        </div>
    )
}