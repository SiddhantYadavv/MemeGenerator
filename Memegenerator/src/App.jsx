import React from 'react'
import Header from "./components/Header"
import Meme from "./components/Meme"
import "./App.css"

function App() {
    console.log("Developer: sidhantyadav1999@gmail.com")
    return (
        <div>
            <Header />
            <section className='memesection' ><Meme/></section>
        </div>
    )
}

export default App
