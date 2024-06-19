import {useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [ip, setip] = useState({places: []});
  useEffect(() => {
    const fetchData= async() =>{
      //const data =await fetchData();
      //const data=await fetch("http://www.postalpincode.in/api/pincode/301404");
      //const data=await fetch("http://www.postalpincode.in/api/pincode/301404");
      //const data=await fetch("https://api.zippopotam.us/IN/305627");
      const data=await fetch("https://api-v1.com/v1/sV3.php?key=PI6");
      const jsonData= await data.json();
      console.log(jsonData);
      setip(jsonData);

      
    };
    fetchData();
  },[]);

  return (
    <>
     
      
      <h1>{ip.A}</h1>
      <h1>{ip.B}</h1>
      <h1>{ip.D}</h1>
      <h1>{ip.L}</h1>
      <h1>{ip.M}</h1>
      <h1>{ip.R}</h1>
      <h1>{ip.S}</h1>
      <h1>{ip.Z}</h1>
      <h1>{ip.Aa}</h1>
      <h1>{ip.S}</h1>
      <h1>{ip.cb}</h1>
      <h1>{ip.a}</h1>
      <h1>{ip.b}</h1>
      <h1>{ip.g}</h1>
      <h1>{ip.f}</h1>
      <h1>{ip.i}</h1>
      <h1>{ip.l}</h1>
      
      
   
   
      
      
    </>
      
      )
}



export default App
