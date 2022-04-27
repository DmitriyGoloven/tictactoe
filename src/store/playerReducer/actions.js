import {createAction} from "redux-actions";

export const changeNameAction = createAction('CHANGE_PLAYER_X')
export const newGameAction = createAction('NEW_GAME')
export const updateBoardAction = createAction('UPDATE_BOARD',(index)=>{
    return {
        payload: index
    }
});



