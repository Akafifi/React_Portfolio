import { useState } from "react"
import About from "./components/About"
import Contact from "./components/Contact"
import Resume from "./components/Resume"

const App = () => {
  const [link, setLink] = useState('home')
  return (
    <>
    <nav className="d-flex justify-content-center gap-3 bg-dark">
      <a href="#" className="text-light"></a>
      <a href="#" className="text-light"></a>
      <a href="#" className="text-light" onClick={() => setLink('resume')}></a>


    </nav>
    <div className="container">

      {link}

      <></>
      <></>
      <></>
  
    </div>
    </>
  )

}

export default App