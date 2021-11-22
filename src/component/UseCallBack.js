import { useEffect, useState, useCallback } from "react";
import Memo from "./Memo";
//useCallBack() việc component cha re-render sẽ không ảnh hưởng tới component con nhưng component con phải dùng memo thì mời có nghĩa
function UseCallBack() {

    const [count, setcount] = useState(0)
    const handleClick = useCallback(
        () => {
            setcount(cur => cur + 1)
        },
        []
    )
    console.log("re-render callback");
    return (
        <>
            <h2>{count}</h2>
            <Memo onCrease={handleClick} />
        </>
    )

}

export default UseCallBack;
