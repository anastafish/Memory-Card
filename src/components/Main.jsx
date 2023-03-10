import { useEffect, useState } from 'react'
import '../styles/main.css'
import Confetti from 'react-confetti'


export default function Main(){
const images = [
    <div className='char' key={0}  onClick={handleClick}>
        <img className='img' id='false' src="../../assests/images/arya.webp" alt="" />
        <h3>Arya Stark</h3>
        </div>,
    <div className='char' key={1}  onClick={handleClick}>
        <img className='img' id='false'  src="../../assests/images/bran.webp" alt="" />
        <h3>Bran Stark</h3>
        </div>,
    <div className='char' key={2}  onClick={handleClick}>
        <img className='img' id='false' src="../../assests/images/cersi.webp" alt="" />
        <h3>Cersei Lannister</h3>
        </div>,
    <div className='char' key={3}  onClick={handleClick}>
        <img className='img' id='false' src="../../assests/images/clarke.webp" alt="" />
        <h3>Daenerys Targaryen</h3>
        </div>,
    <div className='char' key={4}  onClick={handleClick}>
        <img className='img' id='false'  src="../../assests/images/terion.webp" alt="" />
        <h3>Tyrion Lannister</h3>
        </div>,
    <div className='char' key={5}  onClick={handleClick}>
        <img className='img' id='false' src="../../assests/images/jemmy.webp" alt="" />
        <h3>Jemmy Lannister</h3>
        </div>,
    <div className='char' key={6}  onClick={handleClick}>
        <img className='img' id='false' src="../../assests/images/jon.webp" alt="" />
        <h3>John Snow</h3>
        </div>,
    <div className='char' key={7}  onClick={handleClick}>
        <img className='img' id='false' src="../../assests/images/ned.webp" alt="" />
        <h3>Ned Stark</h3>
        </div>,
    <div className='char' key={8}  onClick={handleClick}>
        <img className='img' id='false' src="../../assests/images/robert.webp" alt="" />
        <h3>Robert Baratheon</h3>
        </div>,
    <div className='char' key={9}  onClick={handleClick}>
        <img className='img' id='false' src="../../assests/images/stanes.webp" alt="" />
        <h3>Stanes Baratheon</h3>
        </div>,
]  
const [imageArray, setImageArray] = useState(shufle())
const [lose, setLose] = useState(false)
const [counter, setCounter] = useState(0)
const [win, setWin] = useState(false)


function shufle(){
    let shuffled = images
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    return shuffled
  }


function handleClick(event){       
    if (event.target.id === 'true'){
        const chars = document.querySelectorAll('.char')
        for (let i = 0; i < chars.length; i++){
            chars[i].style.display = "none"
        }
        setLose(true)
    }
    else{
        event.target.id = 'true'
        setCounter(prevCounter => prevCounter+1)
    }
    setImageArray(shufle(event))
}

function newGame(){
    setLose(false)
    setCounter(0)
    const chars = document.querySelectorAll('.char')
    for (let i = 0; i < chars.length; i++){
        chars[i].style.display = "flex"
    }
    const elements = document.querySelectorAll('.img')
    for (let i = 0; i < elements.length; i++){
        elements[i].id = 'false'
    }
}

if (counter === 10){
    const chars = document.querySelectorAll('.char')
    for (let i = 0; i < chars.length; i++){
        chars[i].style.display = "none"
    }
}

    return(
        <div className="main-container">
            {counter === 10 && <Confetti/>}
            {imageArray}
            {lose && <div className='lose-container'>
                <h1>You Lost Try Again!</h1>
                <h1>Score: {counter}</h1>
                <button onClick={newGame}>Play Again</button>
                </div>}
            {counter === 10 && <div className='win-container'>
                <h1>congratulations You Won!</h1>
                <h1>Score: {counter}</h1>
                <button onClick={newGame}>Play Again</button>
                </div>}    
        </div>    
        )
    }