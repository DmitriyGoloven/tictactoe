import {handleAction} from "redux-actions";
import {changeNameAction} from "./actions";

export const defaultState = {
    player: null,
    board: Array(9).fill(null),
    xIsNext: false,
    winner: null
}
const reducer = handleAction(changeNameAction, (state) => {

    return {...state, player: state.xIsNext ? 'O' : 'X', xIsNext: !state.xIsNext};

}, defaultState)


export default reducer


