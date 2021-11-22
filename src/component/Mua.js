import { useState, useMemo } from 'react'
import UseReducer from './UseReducer';

function Mua() {
    let [buyStatus, setBuyStatus] = useState(false)
    let [value, setValue] = useState(0)
    let [data, setData] = useState(0)
    // const handleBuy = useMemo(() => {
    //     setBuyStatus(buyStatus = true)
    // }, [])

    const handleBuy = () => {
        setBuyStatus(buyStatus = true)
        setValue(+data)
    }
    console.log(value);
    const handleData = (e) => {
        setData(e.target.value)
    }
    console.log(buyStatus);

    return (
        <div>
            <input onChange={handleData} />
            <button onClick={handleBuy}>mua </button>
            <div>{buyStatus === true && <UseReducer value={value} />}</div>
        </div>
    )
}

export default Mua
