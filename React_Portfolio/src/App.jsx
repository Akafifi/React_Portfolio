import { Outlet } from 'react-router-dom'
import Navbar from "./components/Navbar"
import { Card } from 'react-bootstrap'


const App = () => {
 

  return (
    <>
      <Navbar />

      <div className="container">
        <Outlet />
      </div>
    </>
  )

}

export default App