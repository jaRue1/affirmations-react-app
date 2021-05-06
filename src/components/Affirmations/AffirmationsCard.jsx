import React from "react"
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
function AffirmationsCard({affirmations }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{affirmations.text}</Card.Title>
        <Card.Text>{affirmations.displayName}</Card.Text>
        <Image src ={affirmations.photoUrl}></Image>
      </Card.Body>
    </Card>
  )
}
export default AffirmationsCard
