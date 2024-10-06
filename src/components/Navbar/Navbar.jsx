import React from './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-container">
            <span className='logo'>IamBooking</span>
            <div className="navItems">
                <button className='navButton'>Register </button>
                <button className='navButton'>Login </button>
                </div>
        </div>

    </div>
  )
}

export default Navbar
