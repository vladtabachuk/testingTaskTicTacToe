
import c from './Game.module.css'

import fG from '../../svg/fieldGrid.svg';
import tX from '../../svg/X.svg'
import tO from '../../svg/O.svg'


import { useEffect, useState } from 'react';

const Game = (props) => {

    const [currentPlayer, setCurrentPlayer] = useState(true)

    const [squares, setSquares] = useState([null,null,null, null,null,null, null,null,null])
    const [tiles, setTiles] = useState([null,null,null, null,null,null, null,null,null])

    const [score1,setScore1] = useState(0)
    const [score2,setScore2] = useState(0)

    const [move, setMoves] = useState(0)
    const [round, setRound] = useState(0)

    const checkWin = () => {
        console.log('check win')
        const winnerLines = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ]
        
        winnerLines.forEach( (element,number) => {
    
            if( 
                (tiles[element[0]] === true)  
                &&(tiles[element[1]] === true)
                &&(tiles[element[2]] === true)  
            ) {
                console.log('winner:',props.playerName1)
                setSquares([null,null,null, null,null,null, null,null,null])
                setTiles([null,null,null, null,null,null, null,null,null])
                setCurrentPlayer(true)
                setScore1(score1+1)
                setRound(round+1)
                setMoves(0)
            } else if(
                (tiles[element[0]] === false)  
                &&(tiles[element[1]] === false)
                &&(tiles[element[2]] === false)  
            ) {
                console.log('winner:',props.playerName2)
                setSquares([null,null,null, null,null,null, null,null,null])
                setTiles([null,null,null, null,null,null, null,null,null])
                setCurrentPlayer(true)
                setScore2(score2+1)
                setRound(round+1)
                setMoves(0)
            } else {
                if(move === 9) {
                    console.log("ничия")
                    setSquares([null,null,null, null,null,null, null,null,null])
                    setTiles([null,null,null, null,null,null, null,null,null])
                    setCurrentPlayer(true)
                    setRound(round+1)
                    setMoves(0)
                } else {
                    console.log("игра продолжается")
                }
            }
        })
    }


    const handleClick = e => {

        console.log('click:', e.target.getAttribute('data') )
        const selectedCell = e.target.getAttribute('data')
    
        if(!squares[selectedCell]) {
            setCurrentPlayer(!currentPlayer)
            
            let newSquares = [...squares]
            let newTiles = [...tiles]

            newTiles[selectedCell] = currentPlayer?true:false
            newSquares[selectedCell] = currentPlayer?tX:tO

            

            setSquares(newSquares)
            setTiles(newTiles)
            setMoves(move+1)
            
        } else {
            alert("По правилам игры нельзя изменять значение в клетке")
        }
        //setSquares([...squares, squares[selectedCell] = currentPlayer?'x':'о'])
        
        console.log(currentPlayer?props.playerName1:props.playerName2)


    }

    useEffect( ()=>{
        checkWin()
    })

    return(
        <div className={c.body}> 
            Game крестики нолики by @vladosononame

            <div className={c.item} >
                <div className={c.gameField} style={{ backgroundImage: `url(${fG})` }}> 
                
                    <div onClick={handleClick} className={c.fieldBlock} data={0} style={squares[0]?{backgroundImage:`url(${squares[0]})`}:{backgroundImage:null}}></div>
                    <div onClick={handleClick} className={c.fieldBlock} data={1} style={squares[1]?{backgroundImage:`url(${squares[1]})`}:{backgroundImage:null}}></div>
                    <div onClick={handleClick} className={c.fieldBlock} data={2} style={squares[2]?{backgroundImage:`url(${squares[2]})`}:{backgroundImage:null}}></div>
                    <div onClick={handleClick} className={c.fieldBlock} data={3} style={squares[3]?{backgroundImage:`url(${squares[3]})`}:{backgroundImage:null}}></div>
                    <div onClick={handleClick} className={c.fieldBlock} data={4} style={squares[4]?{backgroundImage:`url(${squares[4]})`}:{backgroundImage:null}}></div>
                    <div onClick={handleClick} className={c.fieldBlock} data={5} style={squares[5]?{backgroundImage:`url(${squares[5]})`}:{backgroundImage:null}}></div>
                    <div onClick={handleClick} className={c.fieldBlock} data={6} style={squares[6]?{backgroundImage:`url(${squares[6]})`}:{backgroundImage:null}}></div>
                    <div onClick={handleClick} className={c.fieldBlock} data={7} style={squares[7]?{backgroundImage:`url(${squares[7]})`}:{backgroundImage:null}}></div>
                    <div onClick={handleClick} className={c.fieldBlock} data={8} style={squares[8]?{backgroundImage:`url(${squares[8]})`}:{backgroundImage:null}}></div>
                        

                </div>

                <div className={c.score}> 
                    <p style={{fontSize:'50%'}}>Раунд: {round+1}</p>
                    <p style={{fontSize:'50%'}}>Ход номер: {move+1}</p>
                    <p>Ход игрока: {currentPlayer?props.playerName1:props.playerName2}</p>
                    <p>{props.playerName1}: {score1}</p>
                    <p>{props.playerName2}: {score2}</p>
                    
                </div>
            </div>

        </div>
        
    )
}

export default Game