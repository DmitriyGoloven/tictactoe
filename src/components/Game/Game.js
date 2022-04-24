import React, {useCallback, useMemo} from 'react';
import {useDispatch, useSelector} from "react-redux";
import '/src/style/style.scss'
import Board from "../Board/Board";
import {myState} from "../../store/playerReducer/reducers";
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

    const handleClick = (index)=> {
        const boardCopy = [...myState.board]
        if (myState.winner)
            return changeName()
        if (!boardCopy[index] && !myState.winner) {
            boardCopy[index] = player
            myState.board = boardCopy

            myState.winner = calculateWinner(myState.board)
            changeName()
        }
    }

    const dispatch = useDispatch();
    const player = useSelector(state => state.player)
    const board = useSelector(state => state.board)

    const changeName = () => {
        dispatch({
            type: 'CHANGE_PLAYER_X'
        })
    }
    const newGame = () => {
        myState.board = Array(9).fill(null)
        myState.winner = null
        dispatch({
            type: 'NEW_GAME'
        })
    }

    return (
        <div className={'backGround'}>
            <p> {myState.winner ? "WINNER : " + myState.winner : "ACTIVE : " + (player ? player : "NO PLAYER")}</p>
            <Board squares={myState.board} click={handleClick}/>
            <button className={"button"}  onClick={newGame}>NEW GAME</button>
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
        const v = squares.filter((square) => {
            return square === null
        })
        if (v.length === 0) {
            return "NO WINNER"
        }
    }
    return null;
}