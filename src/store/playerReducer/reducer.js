import {handleAction} from "redux-actions";
import {changeNameAction} from "./actions";

export const defaultState = {
    player: null,
    board: Array(9).fill(null),
    xIsNext: false,
    winner: null
}
const reducer = handleAction(changeNameAction, (state) => {

    return {...state, player: state.xIsNext ? 'X' : 'O', xIsNext: !state.xIsNext};

}, defaultState)


export default reducer


