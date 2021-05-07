import React, {useContext} from 'react'
import firebase from 'firebase'
import { UserAuthContext } from '../../App'
firebase.initializeApp({
  apiKey: "AIzaSyB39NEgQAVsJO0Zjwsw8eBBGaRuSW0Nsw8",
  authDomain: "affirm-app-jj.firebaseapp.com",
  projectId: "affirm-app-jj",
  storageBucket: "affirm-app-jj.appspot.com",
  messagingSenderId: "882738711801",
  appId: "1:882738711801:web:7c3e62c6087ed4abac6628"
})

function LoginButton() {
const { user,setUser } = useContext(UserAuthContext)
const clickHandler = () => {
  if(user){
    setUser(null)
  }
  else{
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
    .then(res => console.log(res.user))
    .catch(err => alert(err))
  }

}
 return <button onClick = {()=> clickHandler()}>#</button>
}
export default LoginButton