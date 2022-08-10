export default function Form() {
    return (
        <section className="form-section">
            <div className="form-section-inputs">
                <input type="text" placeholder="top of image"/>
                <input type="text" placeholder="bottom of image"/>
            </div>
            <button className="form-section-button">Generate new meme image</button>
        </section>
    )
}