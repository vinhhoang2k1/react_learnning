import { useState, useReducer } from 'react'
/** 
 * init state  : 0
 * actions : up( state + 1) / down(state - 1)
 * reducer
 * dispatch : kích hoạt action
*/


// init state
const initState = 0;

// init action
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'
// reducer

const reducer = (state, action) => {
    switch (action) {
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default:
            console.error("invalid case");
    }
}
export default function UseReducer({value}) {

    const [count, dispatch] = useReducer(reducer, value)
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
