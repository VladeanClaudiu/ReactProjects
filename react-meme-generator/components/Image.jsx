export default function Image(props) {
    const {img, top, bottom} = props;
    return (
        
        <section className="image-section">
            <img src={img}/>
            <h2 className="meme-text top">{top}</h2>
            <h2 className="meme-text bottom">{bottom}</h2>
        </section>
    )
}