import "./App.css"
import { useState, createContext } from "react" // Hooks 
import Header from "./components/Header" // Components
import Affirmations from "./components/Affirmations" // Components
import Footer from "./components/Footer" // Components
import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/Container"
export const UserAuthContext = createContext(null)
function App() {
  const [user, setUser] = useState(null)
  return (
    <UserAuthContext.Provider value={{user, setUser}}> {/* Application State */}
      <Header />
      <Container>
        <Affirmations />
      </Container>
      <Footer />
    </UserAuthContext.Provider>
  )
}

export default App
