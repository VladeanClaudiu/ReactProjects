import React from "react";
import Image from "./Image";

export default function Form() {
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/9iz9.jpg'
    })

    React.useEffect(() =>{
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => {
            let memesArray = data.data.memes
            setAllMemes(memesArray);
            console.log(allMemes)
        })
    },[])


    const [allMemes, setAllMemes] = React.useState([])
    
    function getMeme() {
        const memeArray = allMemes
        const randomNumber = Math.floor(Math.random()*(memeArray.length));
        const memeUrl = memeArray[randomNumber].url;
        setMeme(prevMeme=> ({
                ...prevMeme,
                randomImage: memeUrl
            }));
    }
    console.log(meme)

    function handleInput(event){
        const {name, value} = event.target;
        setMeme(prevMeme => 
            ({
               ...prevMeme,
               [name]:value
            })
        )
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