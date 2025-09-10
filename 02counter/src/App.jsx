import { useState } from 'react'
import './App.css'

function App() {
  
let [count,setcounter]=useState(0);

function add(){

setcounter(count+1);
  setcounter(count+1);
  setcounter(count+1);
  setcounter(count+1);
}
function sub(){
  
  
setcounter(count-1);
  
  
}

  return (
    <>
     <h1>ayush rawat</h1>
     <h2>counter: {count}</h2> 
     <button onClick={add}>add</button>
     <button onClick={sub}>sub</button>
     <h3>footer:{count}</h3>

    </>
  )
}

export default App
