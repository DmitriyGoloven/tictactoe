import React, {useCallback, useMemo} from 'react';
import '/src/style/style.scss'
import Board from "../Board/Board";
import {defaultState} from "../../store/playerReducer/reducer";

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

const Game = ({changeNameAction,newGameAction, player, board}) => {

    const handleClick = (index)=> {
        console.log(index)
        const boardCopy = [...defaultState.board]

        if (defaultState.winner)
            return changeNameAction()
        if (!boardCopy[index] && !defaultState.winner) {
            boardCopy[index] = player
            defaultState.board = boardCopy
            defaultState.winner = calculateWinner(defaultState.board)
            changeNameAction()
        }
    }

    return (
        <div className={'backGround'}>
            <p> {defaultState.winner ? "WINNER : " + defaultState.winner : "ACTIVE : " + (player ? player : "NO PLAYER")}</p>
            <Board squares={defaultState.board} click={handleClick}/>
            <button className={"button"}  onClick={newGameAction}>NEW GAME</button>
        </div>
    );
};




function calculateWinner(squares) {

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
        const v = squares.filter((square) => {
            return square === null
        })
        if (v.length === 0) {
            return "NO WINNER"
        }
    }
    return null;
}

export default Game;