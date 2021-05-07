import React, { useContext, useEffect} from "react"
import { AffirmationsContext } from '../../App'
import AffirmationsCard from "./AffirmationsCard"
// import CardColumns from "react-bootstrap/CardColumns"

function Affirmations() {
  const { affirmationsList, setAffirmationsList } = useContext(AffirmationsContext)
  useEffect( () => {
    fetch('https://affirm-api-jj.web.app/affirmations')
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
