import React from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'

const Header: React.FC = () => {
  return (
    <nav className={cx('navbar', 'navbar-dark', 'bg-primary', 'justify-content-start')}>
      <span className={cx('navbar-brand', 'mb-0', 'h1')}>Navbar</span>
      <div className='navbar-nav'>
        <Link className={cx('nav-item', 'nav-link', 'active')} to={'/'}>
          Home
        </Link>
      </div>
    </nav>
  )
}

export default Header
