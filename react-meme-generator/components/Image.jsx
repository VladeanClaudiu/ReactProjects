export default function Image(props) {
    const {img} = props;
    return (
        <section className="image-section">
            <img src={img}/>
        </section>
    )
}