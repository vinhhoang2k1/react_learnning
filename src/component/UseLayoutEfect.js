import React, { useLayoutEffect, useState } from 'react'

//được dùng trong trương hợp xét lại và kết hợp với điều kiện 
export default function UseLayoutEfect() {
    const [count, setCount] = useState(1);
    useLayoutEffect(() => {
        if (count > 3) setCount(0)

    }, [count])

    const handleClick = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick} >run</button>

        </div>
    )
}
