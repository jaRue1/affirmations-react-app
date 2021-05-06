import "./App.css"
import Header from "./components/Header"
import Affirmations from "./components/Affirmations"
import Footer from "./components/Footer"
import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/Container"
function App() {
  return (
    <>
      <Header />
      <Container>
        <Affirmations />
      </Container>
      <Footer />
    </>
  )
}

export default App
