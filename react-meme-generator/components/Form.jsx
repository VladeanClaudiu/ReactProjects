import memeData from "../data/memeData"

export default function Form() {
    function getMeme() {
        //console.log(memeData.data.memes.length)
        const memeArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random()*(memeArray.length));
        const memeUrl = memeArray[randomNumber].url;
        console.log(memeUrl);
       
    }
    return (
        <section className="form-section">
            <div className="form-section-inputs">
                <form>
                    <input type="text" placeholder="top of image"/>
                    <input type="text" placeholder="bottom of image"/>
                </form>
                
            </div>
            <button onClick={getMeme} className="form-section-button">Generate new meme image</button>
        </section>
    )
}