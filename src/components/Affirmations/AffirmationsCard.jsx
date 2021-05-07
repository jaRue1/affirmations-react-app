import React from "react"
import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image"
import Col from "react-bootstrap/Col"
import Media from "react-bootstrap/Media"
import "./affirmation.css"

function AffirmationsCard({ affirmations }) {
  let d = new Date(affirmations.created_at._seconds * 1000)
  return (
    <Col md={true}>
      <Card className="affirmation-card"style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title className="text-center">{affirmations.text}</Card.Title>
          <Card.Text>
            <Media>
              <Media.Body><strong>{affirmations.displayName}</strong></Media.Body>
              <Image
                roundedCircle
                width="36"
                height="36"
                src={affirmations.photoUrl}
                alt={affirmations.displayName}
              />
            </Media>
          </Card.Text>
          <Card.Text>{d.toLocaleDateString()}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}
export default AffirmationsCard
