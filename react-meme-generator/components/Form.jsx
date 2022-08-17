import React from "react";
import memeData from "../data/memeData"
import Image from "./Image";

export default function Form() {
    
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/9iz9.jpg'
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memeData)
    
    function getMeme() {
        const memeArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random()*(memeArray.length));
        const memeUrl = memeArray[randomNumber].url;
        setMeme(prevMeme=> {
            return {
                ...prevMeme,
                randomImage: memeUrl
            }
        });
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
            img = {meme.randomImage}
            />
        </main>
        
    )
}