import { useState, useReducer } from 'react'
/** 
 * init state 
 * actions
 * reducer
 * dispatch
*/

const init = 0;

const UP_ACTION = "up";
const DOWN_ACTION = "down";

const reduce = (state, action) => {
    switch (action) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;

        default:
            throw new Error('invalid action')

    }
}

export default function UseReducer() {

    const [count, dispatch] = useReducer(reduce, init);
    return (
        <div>
            <h2>{count}</h2>
            <button style={{ width: "50px", display: "inline-block" }}
                onClick={() => { dispatch(UP_ACTION) }}>+</button>
            <button style={{ width: "50px", display: "inline-block" }}
                onClick={() => { dispatch(DOWN_ACTION) }}>-</button>
        </div>
    )
}
