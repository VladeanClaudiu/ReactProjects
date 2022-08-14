import React from "react";
import memeData from "../data/memeData"
import Image from "./Image";

export default function Form() {
    const [memeImage, setMemeImage] = React.useState("");
    function getMeme() {
        const memeArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random()*(memeArray.length));
        const memeUrl = memeArray[randomNumber].url;
        setMemeImage(memeUrl);
    }
    return (
        <main>
            <section className="form-section">
            <div className="form-section-inputs">
                <form>
                    <input type="text" placeholder="Text 1"/>
                    <input type="text" placeholder="Text 2"/>
                </form>
                
            </div>
            <button onClick={getMeme} className="form-section-button">Generate new meme image</button>
        </section>
        <Image 
            img = {memeImage}
            />
        </main>
        
    )
}