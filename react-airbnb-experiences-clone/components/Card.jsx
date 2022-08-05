export default function Card(props){
    const {image, } = props;
    return (
        <div className="card">
            <img src={image} alt="card image" className="card-image" />
            <div>

            </div>
        </div>
    )
}