import React from "react"

export default function Meme() {

    const [memesArrayData,setData]=React.useState([])
    const [meme,setMeme]=React.useState("https://i.imgflip.com/2ztqsn.jpg?a465168")
    const [formData,setFormData]=React.useState({
        TopText:"",
        BottomText:""
    })

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(obj=> setData(obj))
    
    },[0])

    function handleChange(event){
        setFormData(prevData=>{
            return{
                ...prevData,
                [event.target.name]:event.target.value
            }
        })
    }
   

    function Getimage(){
        const memeArray=memesArrayData.data.memes
        const randomNumber=Math.floor(Math.random()*memeArray.length)
        const randomMemeUrl=memeArray[randomNumber].url
        setMeme(randomMemeUrl)
        
    }

    return (
        <div className="Meme">
            
            <div>
            <input 
                    className="inputs" 
                    placeholder="Top Text" 
                    type="text"
                    name="TopText"
                    value={formData.TopText}
                    onChange={handleChange}

            />
            <input 
                    className="inputs" 
                    placeholder="Bottom Text" 
                    type="text"
                    name="BottomText"
                    value={formData.BottomText}
                    onChange={handleChange}

            />
           </div>
            <button className="button" onClick={Getimage} >Get Random Image</button>

            <div className="memearea">
                <img className="memeareaImage" src={meme} height="60%" width="60%px"></img>
                <h1 className="memeareaTopText" >{formData.TopText}</h1>
                <h1 className="memeareaBottomText" >{formData.BottomText}</h1>
            </div>
            
        </div>
    )
}
