import { useState } from "react"



function App() {

  const [posts, setPost] = useState([])
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    // .then(posts => {
    //   setPost(posts)
      
    // })

  return(
    <div >
      <h2></h2>
    </div>
  )

}
export default App;
