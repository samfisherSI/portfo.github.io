import React from 'react';
import './assets/main.css'

function App() {
  return (
    <div className="flex flex-col sm:flex-row h-screen">
     <div className="flex flex-col bg-teal-300 w-full sm:w-1/2 h-full sm:h-auto justify-around">
     
      <div className="flex rounded-full h-20 w-20 items-center align-center bg-white self-center">
      <img src="./assets/icon-20200824T210915Z-001/icon/icon.png" alt="" className="flex h-15 w-15"/>
      

     </div></div>
     <div className="flex flex-col w-full sm:w-1/2 h-full sm:h-auto justify-around ">
     <div className="flex self-center">
       Upload Your Documents
     </div>
     <div className="border-dotted border-2 border-gray-300 m-10">
     <img src="../icon-20200824T210915Z-001/icon/upload.png"></img>
       <h1>Drag and drop</h1>
       <h2>or browse to choose a file</h2>
     </div>
     <div className="flex flex-row justify-center">
     <button className="rounded bg-teal-300 px-4 py-4 w-24 text-white m-1"> Submit</button>
     <button className="border-solid border-2 border-teal-300 px-4 py-4 w-24 text-teal-300 m-1"> Pass</button>
     </div>
     </div>
    </div>
  );
}

export default App;
