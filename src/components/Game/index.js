import {changeNameAction} from "../../store/playerReducer/actions"
import {newGameAction} from "../../store/playerReducer/actions"
import {board} from "../../store/playerReducer/selectors";
import {player} from "../../store/playerReducer/selectors";
import {winnerPlayer} from "../../store/playerReducer/selectors";
import {updateBoardAction} from "../../store/playerReducer/actions";
import {connect} from "react-redux";
import Game from "./Game";
import {createStructuredSelector} from "reselect";

const mapDispatchToProps = {
    changeNameAction,
    newGameAction,
    updateBoardAction
}

const mapStateToProps = createStructuredSelector({
    board,
    player,
    winnerPlayer
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);