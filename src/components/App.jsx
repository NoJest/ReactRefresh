import { useState } from 'react'
import './App.css'
import {Outlet} from "react-router-dom"

function App() {
return (
  <>
  <div>
    <h1>Baddies in your hood</h1>
    <h2> (landlords) </h2>

    <Outlet/>

  </div>
  
  </>
) 
}

export default App
