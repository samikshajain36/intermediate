import React, { useState } from 'react';
import Navbar from './component/Navbar';
import Card from './component/Card';
import load from './component/image/loading-g426661af6_1280.jpg';

 export function App() {
   const [team,setTeam]= useState([])

   const getTeam = async ()  => {
     const loader = document.querySelector('.loader');
     loader.classList.add('loader-in');
     let response = await fetch("https://reqres.in/api/users?page=1");
     let jsonResponse = await response.json();
     await new Promise((resolve) => setTimeout(function(){resolve("delayed")},6*1000));     
     loader.classList.remove('loader.in');
     setTeam(jsonResponse.data);
   }
  return (
      <div>

            <Navbar getTeam = {getTeam}/>
            <div className='loader'>
              <img className="loader" src={load} alt=''/>
            </div>
            <Card team = {team} />
      </div>
      
  );
}
    export default App;
