import {handleAction} from "redux-actions";
import {newGameAction} from "./actions";

export const defaultState ={
    player: null,
    board: Array(9).fill(null),
    xIsNext: true,
    winner: null
}
const reducer = handleAction(newGameAction, (state) => ({...state}),
    defaultState
)
export default reducer