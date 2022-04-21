import React, {useState} from 'react';
import Board from "./Board";
import '/src/style/style.scss'

const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const Game = () => {
    const  [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext]=useState(true)
    const winner = calculateWinner(board)

    const handleClick = (index) =>{
        const boardCopy = [...board]

        if(winner || boardCopy[index])
            return null

        boardCopy[index] = xIsNext ? "X" : "O"
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }

    const startNewGame = ()=>{
        return (
            <button className={"button"} onClick={()=>{setBoard(Array(9).fill(null))}}>
                NEW GAME
            </button>
        )
    }

    return (
        <div className={'backGround'}>
            <p>
                {winner ? "WINNER : "+ winner : "ACTIVE : "+ (xIsNext ? "X" : "O")}
            </p>
            <Board squares = {board} click={handleClick}/>
            {startNewGame()}
        </div>
    );
};

export default Game;




function calculateWinner(squares) {

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];

        }
        const v = squares.filter((square)=>{return square === null})
        if (v.length === 0){
            return "NO WINNER"
        }
    }
    return null;
}