import React from 'react'

function LandlordCard( {landlord} ) {
  return (
    <div>
        <h3>Landlord Name: {landlord.name}</h3>
        <p>Associated LLCs: {landlord.associated_llcs}</p>
        <p>Violations: {landlord.violations}</p>
    </div>
  )
}

export default LandlordCard