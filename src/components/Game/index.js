import {changeNameAction} from "../../store/playerReducer/actions"
import {newGameAction} from "../../store/boardReducer/actions"
import {board} from "../../store/boardReducer/selectors";
import {player} from "../../store/playerReducer/selectors";
import {connect} from "react-redux";
import Game from "./Game";
import {createStructuredSelector} from "reselect";

const mapDispatchToProps = {
    changeNameAction,
    newGameAction
}

const mapStateToProps = createStructuredSelector({
    board,
    player
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);