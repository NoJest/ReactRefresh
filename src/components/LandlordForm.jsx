import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
function LandlordForm() {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [llcs, setLlcs] = useState("")
    const [violations, setViolations] = useState("")

    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleLlcs = (e) => {
        setLlcs(e.target.value);
    };
    const handleViolations = (e) => {
        setViolations(e.target.value);
    };

    // function clearForm() {
    //     setName('')
    //     setLlcs('')
    //     setViolations('')
    // }

    async function handleSubmit(e) {
        e.preventDefault()

        const response = await fetch('http://localhost:3000/landlords', {
            method: 'POST',
            headers: {'Content-Type': "application/json", 'Accept': 'application/json'},
            body: JSON.stringify( { name,
                associated_llcs: llcs,
                violations
            } )
        })
        if (response.ok){
            navigate('/')
        } else {
            alert("something is amiss")
        }
    }

  return (
    <>
    <form onSubmit={ handleSubmit }>

        <label>
            Name:
            <input value={name} onChange={handleName}/></label>
        
        <br/>        
        <label>
            Llcs:
            <input value={llcs} onChange={handleLlcs}/></label>
        
        <br/>
        <label>
            Violations:
            <input value={violations} onChange={handleViolations}/></label>
        
        <br />
        <input type="submit" value="Submit your bad Landlord"  />
       

    </form>  
    <button>
        <Link to="/"> go home </Link>
    </button>
    </>
  )
}

export default LandlordForm