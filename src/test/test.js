import React, {useCallback, useEffect, useState} from 'react';
import Test1 from "./test1";

const Test = () => {
    const [headings, setHeadings] =useState(['First','Second','Third'])

    useEffect(()=>{
        console.log('do if dependencies changed ')
    },[headings])

    const onAdd = useCallback( ()=>{
        setHeadings(()=>[...headings,'some 4' ])
    },[headings])

    const onClick = useCallback( ()=>{
        setHeadings((state)=> {
            const newState = [...state]
            newState.splice(-1,1)
            return newState
        })
    },[])


    return (
        <div>
            <div className={'some'}>
                {headings.map((elem, index) => (
                <Test1 onClick={onClick} key={index}>{elem}</Test1>)
                )}

                <button onClick={onAdd}>
                    CLICK ME
                </button>


                {/*<Test1 myProps = {'first'} >*/}
                {/*    {headings[0]}*/}
                {/*</Test1>*/}

                {/*<Test1 myProps={ 'second'}>*/}
                {/*    {headings[1]}*/}
                {/*</Test1>*/}

                {/*<Test1 myProps={ 'third'}>*/}
                {/*    {headings[2]}*/}
                {/*</Test1><Test1/>*/}


                {/*<p style={{textAlign: "center"}}>name</p>*/}
            </div>
            <h1 style={{textAlign: "center"}}>tictactoe</h1>
        </div>
    );
};

export default Test;