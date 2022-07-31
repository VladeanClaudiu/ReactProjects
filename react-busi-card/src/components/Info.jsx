export default function Info(){
    return(
        <div className="info-section">
            <div className="info-photo"></div>
            <h1>Claudiu Vladean</h1>
            <h4>Frontend Developer</h4>
            <a href="#">claudiuvladea.com</a>
            <div className="info-buttons">
                <button onClick={()=>{
                    window.open('mailto:claudiuver1.0@gmail.com');
                }} className="button-email">Email</button>
                <button onClick={()=>{
                    location.href = "https://www.linkedin.com/in/claudiu-vladean-652614191/";
                }} className="button-linkedIn">LinkedIn</button>
            </div>
        </div>
    )
}