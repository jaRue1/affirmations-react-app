import { useState, createContext } from "react" // Hooks 
// import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import Header from "./components/Header" // Components
import Affirmations from "./components/Affirmations" // Components
import Footer from "./components/Footer" // Components
import Container from "react-bootstrap/Container"

export const UserAuthContext = createContext(null)
export const AffirmationsContext = createContext(null)

function App() {
  const [user, setUser] = useState(null)
  const [affirmationsList , setAffirmationsList ] = useState(null)

  return (
    <AffirmationsContext.Provider value={{affirmationsList , setAffirmationsList ,}}> {/* Application State */}
    <UserAuthContext.Provider value={{user, setUser,}}> {/* Application State */}
     <div className= "AppStyles">
       <header >
         <section>
        <Header />
        </section>
      </header>
        <Container>
        <main>
          <section>
          <Affirmations />
          </section>
       </main>
        </Container>
        <Footer className="App-Footer" />
      </div>
    </UserAuthContext.Provider>
    </AffirmationsContext.Provider>
  )
}

export default App
