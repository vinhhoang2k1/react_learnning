import { useState, useRef } from 'react';
import Memo from './Memo';
//useRef luon trả về 1 object và  syntax UseRef(gia_tri_khoi_tao)
//giữ giá trị không thay đổi 


export default function UseRef() {
    const [count, setcount] = useState(60);
    let conuntId = useRef();
    console.log(conuntId);
    const handleStart = () => {
        conuntId.current = setInterval(() => {
            setcount(pre => pre - 1)
        }, 1000);

    }
    const handleStop = () => {
        clearInterval(conuntId.current);
    }
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={handleStart}>start</button>
            <button onClick={handleStop}>stop</button>
        </div>
    )
}
