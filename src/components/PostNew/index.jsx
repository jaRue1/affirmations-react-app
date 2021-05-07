import  Modal from 'react-bootstrap/Modal'
import { UserAuthContext, AffirmationsContext } from '../../App'
import React, { useState ,useContext } from 'react'
import './styles.css'
function PostNew(props) {
  const [newText, setNewText ] = useState('')
  const { user } = useContext(UserAuthContext)
  const { setAffirmationsList } = useContext(AffirmationsContext)
  const handleSubmit = () => {
    const newAffirmation = { 
      text: newText,
      uid: user.uid,
      displayName: user.displayName,
      photoUrl: user.photoURL,
    }
    fetch('https://affirm-api-jj.web.app/affirmations', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newAffirmation)
    })
    .then(response => response.json())
    .then(data => {
      setNewText('')
      props.onHide()
      setAffirmationsList(data)
    })
    .catch(err => console.log(err))
  }
  return(
    <Modal {...props} size="lg" centered className="modal">
        <Modal.Header closeButton/>
        <Modal.Title className="modalTitle">Add an Affirmation</Modal.Title>
        <Modal.Body>
          <textarea 
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          placeholder="Your Affirmation Here" rows = "4" cols = "60">
         </textarea>
        </Modal.Body>
        <Modal.Footer>
          <button className="modalButton" onClick = {()=> handleSubmit()} > Save </button>
        </Modal.Footer>
    </Modal>
  )
}

export default PostNew