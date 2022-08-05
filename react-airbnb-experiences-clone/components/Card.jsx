export default function Card(props){
    const {image, rating, stars, location, title, price} = props;
    return (
        <div className="card">
            <img src={image} alt="card image" className="card-image" />
            <div className="card-info">
                <img src="" className="card-star" />
                <span>{rating}</span>
                <span className="card-accent-gray">({stars}) •</span>
                <span className="card-accent-gray">{location}</span>
            </div>
            <p className="card-title">{title}</p>
            <p><span className="card-price-bold">From ${price}</span> / person</p>
        </div>
    )
}