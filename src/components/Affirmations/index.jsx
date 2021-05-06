import React, { useState, useEffect} from "react"
import AffirmationsCard from "./AffirmationsCard"
import CardColumns from "react-bootstrap/CardColumns"

function Affirmations() {
  const [affirmationsList , setAffirmationsList ] = useState(null)

  useEffect( () => {
    fetch('https://affirm-bc-api.web.app/affirmations')
    .then(response => response.json())
    .then(data => setAffirmationsList(data))
    .catch(error => console.error(error))
  },[])

  return (
   <>
   {/* Conditional Rendering  */}
      {!affirmationsList ? <h2>Loading....</h2> : affirmationsList.map(one =>{
        return <AffirmationsCard affirmations={one}/>
      })}
      
   </>    
    
  )
}
export default Affirmations
