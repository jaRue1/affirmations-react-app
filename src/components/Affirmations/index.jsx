import React, { useContext, useEffect} from "react"
import { AffirmationsContext } from '../../App'
import AffirmationsCard from "./AffirmationsCard"
import CardColumns from "react-bootstrap/CardColumns"
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
function Affirmations() {
  const { affirmationsList, setAffirmationsList } = useContext(AffirmationsContext)
  useEffect( () => {
    fetch('https://affirm-api-jj.web.app/affirmations')
    .then(response => response.json())
    .then(data => setAffirmationsList(data))
    .catch(error => console.error(error))
  },[])

  return (
    <CardColumns>
      {/* Conditional Rendering  */}
      <Row>
      {!affirmationsList ? (<Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>) : affirmationsList.map(one =>{
        return <AffirmationsCard affirmations={one}/>
      })}
      </Row>
    </CardColumns>
  )
}
export default Affirmations
