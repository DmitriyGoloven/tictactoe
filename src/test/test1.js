import React from 'react';

const Test1 = ({children,myProps,onClick}) => {
    return (

            <h1 className={myProps} onClick={onClick}>{children}</h1>

    );
};

export default Test1;