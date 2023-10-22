
import { Link } from 'react-router-dom'

const Navbar = () => {
 return (
    <nav className="d-flex justify-content-center gap-3 bg-dark p-3">
        <Link to="/" href="#" className='text-light'>Home</Link>
        <Link to="about" href="#" className="text-light">About</Link>
        <Link to="contact" href="#" className="text-light">Contact</Link>
        <Link to="resume" href="#" className="text-light">Resume</Link>
      </nav>

 )
}

export default Navbar