// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';

// let name = "RANJAN";
function App() {

//  const [counter,setCounter] = useState("1")

 const name = "ENTER YOUR TEXT";
  
  return (
    <>
   <Navbar name  = {name}/> 
    </>
  );
}

export default App;
