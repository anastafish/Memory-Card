import { useEffect, useState } from 'react'
import '../styles/main.css'

export default function Main(props){
const images = [
    <div className='char' key={0}  onClick={handleClick}>
        <img id='false' src="../../images/arya.webp" alt="" />
        <h3>Arya Stark</h3>
        </div>,
    <div className='char' key={1}  onClick={handleClick}>
        <img id='false'  src="../../images/bran.webp" alt="" />
        <h3>Bran Stark</h3>
        </div>,
    <div className='char' key={2}  onClick={handleClick}>
        <img id='false' src="../../images/cersi.webp" alt="" />
        <h3>Cersei Lannister</h3>
        </div>,
    <div className='char' key={3}  onClick={handleClick}>
        <img id='false' src="../../images/clarke.webp" alt="" />
        <h3>Daenerys Targaryen</h3>
        </div>,
    <div className='char' key={4}  onClick={handleClick}>
        <img id='false'  src="../../images/terion.webp" alt="" />
        <h3>Tyrion Lannister</h3>
        </div>,
    <div className='char' key={5}  onClick={handleClick}>
        <img id='false' src="../../images/jemmy.webp" alt="" />
        <h3>Jemmy Lannister</h3>
        </div>,
    <div className='char' key={6}  onClick={handleClick}>
        <img id='false' src="../../images/jon.webp" alt="" />
        <h3>John Snow</h3>
        </div>,
    <div className='char' key={7}  onClick={handleClick}>
        <img id='false' src="../../images/ned.webp" alt="" />
        <h3>Ned Stark</h3>
        </div>,
    <div className='char' key={8}  onClick={handleClick}>
        <img id='false' src="../../images/robert.webp" alt="" />
        <h3>Robert Baratheon</h3>
        </div>,
    <div className='char' key={9}  onClick={handleClick}>
        <img id='false' src="../../images/stanes.webp" alt="" />
        <h3>Stanes Baratheon</h3>
        </div>,
]  
const [imageArray, setImageArray] = useState(shufle())
const [lose, setLose] = useState(false)
console.log(lose)

function shufle(){
    let shuffled = images
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    return shuffled
  }


function handleClick(event){   
    if (event.target.id === 'true'){
        setLose(true)
        event.target.id = 'false'
    }
    else{event.target.id = 'true'}
    setImageArray(shufle(event))
}

function newGame(){
    setLose(false)
}




    return(
        <div className="main-container">
            {imageArray}
            {lose && <div className='lose-container'>
                <h1>You Lost Try Again!</h1>
                <button onClick={newGame}>Play Again</button>
                </div>}
        </div>    
        )
    }