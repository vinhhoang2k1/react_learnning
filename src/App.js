import { useState } from "react"



function App() {
  // const array = [100, 200, 300]

  // const [counter, setCount] = useState(() => {
  //   const total = array.reduce((total, cur) => total + cur)
  //   console.log(total);
  //   return total;
  // });
  // // counter duoc gan gia tri khoi tao 
  // // setCounter la 1 ham co chuc nang set lai gia tri
  // // doi so cua ham useState(initial_value) va initial_value chi duoc goi lai 1 lan nhu vi du tren
  // const handleIncrease = () => {
  //   setCount(() => counter + 1)
  // }
  // return (
  //   <div style={{ padding: 20 }}>
  //     <h2>{counter}</h2>
  //     <button onClick={handleIncrease} >increase</button>
  //   </div>
  // )

  const [sv, setSv] = useState({
    nameSv: 'vinh',
    address: 'hai van'
  })

  const handleSv = () => {
    setSv({
      ...sv,
      bio: 'hello world'
    })
  }
  return (
      <div style={{ padding: 20 }}>
        <h2>{JSON.stringify(sv)}</h2>
        <button onClick={handleSv} >increase</button>
      </div>
    )
}



export default App;
