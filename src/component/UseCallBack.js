import { useEffect, useState, useCallback } from "react";
import Memo from "./Memo";
//useCallBack() việc component cha re-render sẽ không ảnh hưởng tới component con 
// thường thì khi handle logic thì sẽ sử dụng useCallback nhưng component con phải dùng memo thì mời có nghĩa
function UseCallBack() {

    const [count, setcount] = useState(0)

    console.log("re-render callback");
    const handleCrease = useCallback(() => {
        setcount(cur => cur + 1)
    }, [])
    return (
        <>
            <h2>{count}</h2>
            <Memo onCrease={handleCrease} />
        </>
    )

}

export default UseCallBack;
