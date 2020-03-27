import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <nav className="navbar navbar-dark bg-primary justify-content-start">
      <span className="navbar-brand mb-0 h1">Navbar</span>
      <div className="navbar-nav">
        <Link className="nav-item nav-link active" to={'/'}>
          Home
        </Link>
      </div>
    </nav>
  )
}

export default Header
