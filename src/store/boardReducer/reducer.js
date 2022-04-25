import {handleAction} from "redux-actions";
import {newGameAction} from "./actions";

export const defaultState = {
    player: null,
    board: Array(9).fill(null),
    xIsNext: true,
    winner: null
}
console.log(defaultState)
const reducer = handleAction(newGameAction, (state) => (
        {...state, board: Array(9).fill(null)}),

    defaultState
)

export default reducer