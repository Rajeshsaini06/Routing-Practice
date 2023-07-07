// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="header">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png "
        className="logo"
        alt="wave"
      />
      <h1>Wave</h1>
    </div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
)

export default Header
