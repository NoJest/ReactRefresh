import React from 'react'
import { useEffect, useState } from 'react'
import LandlordCard from "./LandlordCard.jsx"
import { Link } from 'react-router-dom'

function AllLandlords() {

    const [landlords, setLandlord] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/landlords')
            .then(response => response.json())
            .then(data => setLandlord(data))
    }, [])

  return (
    <>
    <div>
        <h3> all of those baddies</h3>
        <Link to="/add-new-landlord"> Add your Baddy </Link>
        {landlords.map( landlord=> <LandlordCard key={landlord.id} landlord={landlord}  />)}
    </div>
    </>
  )
}

export default AllLandlords