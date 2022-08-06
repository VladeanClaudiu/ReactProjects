export default function Card(props){
    const {openSpots, coverImg, stats, reviewCount, location, title, price} = props.card;
    return (
        <div className="card">
            {openSpots !== null ? <div className="card-available">{openSpots ? <p>AVAILABLE</p> : <p>SOLD OUT</p>}</div> : null}    
            <img src={'../src/assets/images/'+coverImg} alt="card image" className="card-image" />
            <div className="card-info">
                <img src="../src/assets/star.png" className="card-star" />
                <span>{stats.rating}</span>
                <span className="card-accent-gray">({stats.reviewCount}) •</span>
                <span className="card-accent-gray">{location}</span>
            </div>
            <p className="card-title">{title}</p>
            <p><span className="card-price-bold">From ${price}</span> / person</p>
        </div>
    )
}