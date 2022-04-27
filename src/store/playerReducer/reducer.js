import {handleAction, handleActions} from "redux-actions";
import {changeNameAction, updateBoard, updateBoardAction} from "./actions";
import {calculateWinner} from "../../components/Game/Game";
import {newGameAction} from "./actions";

export const defaultState = {
    player: null,
    board: Array(9).fill(null),
    xIsNext: false,
    winner: null
}

const reducer = handleActions({
    [changeNameAction]: (state) => {

        const winPlayer = calculateWinner(state.board)
        return {
            ...state,
            player: state.xIsNext ? 'O' : 'X',
            xIsNext: !state.xIsNext,
            winner: winPlayer
        };
    },
    [newGameAction]: state => ({
        ...state,
        board: Array(9).fill(null),
        winner: null,
        player: null,
        xIsNext: false,
    }),
    [updateBoardAction]: (state, { payload }) => {
        const sumState = {
            board: state.board,
        }
        console.log(payload)
        if (state.winner || sumState.board[payload.payload])
            return state
        sumState.board[payload.payload] = state.player;

        return {
            ...state,
            board: sumState.board,
        };
    }

}, defaultState)

export default reducer;

