import { memo } from 'react';
//tránh việc component cha re-render mà component con re-render theo 


function Memo({ onCrease }) {
    console.log("re-render memo");
    return (
        <div>
            hello ae
            <button onClick={onCrease} >click</button>
        </div>
    )
}
export default memo(Memo)
