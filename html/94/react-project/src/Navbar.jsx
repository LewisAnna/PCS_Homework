import {NavLink} from 'react-router';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Blogs</NavLink></li>
        <li><NavLink to="/post">Posts</NavLink></li>
        <li><NavLink to="/comment">Comments</NavLink></li>
        <li><NavLink to="/back">Back</NavLink></li>
      </ul>
    </nav>
  )
}