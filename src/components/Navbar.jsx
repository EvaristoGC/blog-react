import { Link } from "react-router-dom"

import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h2>
            <Link to={'/'}>blog</Link>
        </h2>
        <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/new'}>Novo Post</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar