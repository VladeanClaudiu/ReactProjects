export default function Card(props){
    const {available, image, stars, rating, location, title, price} = props;
    return (
        <div className="card">
            {props.hasOwnProperty('available') ? <div className="card-available">{available ? <p>ONLINE</p> : <p>SOLD OUT</p>}</div> : null}    
            <img src={image} alt="card image" className="card-image" />
            <div className="card-info">
                <img src="../src/assets/images/star.png" className="card-star" />
                <span>{stars}</span>
                <span className="card-accent-gray">({rating}) •</span>
                <span className="card-accent-gray">{location}</span>
            </div>
            <p className="card-title">{title}</p>
            <p><span className="card-price-bold">From ${price}</span> / person</p>
        </div>
    )
}