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
    console.log(meme)

    function handleInput(event){
        //console.log(event)
        const {name, value } = event.target;
        setMeme(prevMeme => {
            return{
               ...prevMeme,
               [name]:value
            }
        })
    }
    
    return (
        <main>
            <section className="form-section">
            <div className="form-section-inputs">
                <form>
                    <input 
                    type="text" 
                    placeholder="Text 1"
                    name="topText"
                    onChange={handleInput}
                    value={meme.topText}/>
                    
                    <input 
                    type="text" 
                    placeholder="Text 2"
                    name="bottomText"
                    onChange={handleInput}
                    value={meme.bottomText}/>
                </form>
                
            </div>
            <button onClick={getMeme} className="form-section-button">Generate new meme image</button>
        </section>
        <Image 
            img = {meme.randomImage}
            top = {meme.topText}
            bottom = {meme.bottomText}
            />
        </main>
        
    )
}