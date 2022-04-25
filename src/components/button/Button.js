import React from 'react';

const Button = ({newGame}) => {
    return (
        <div >
            <button className={"button"} onClick={newGame}>NEW GAME</button>
        </div>
    );
};

export default Button;