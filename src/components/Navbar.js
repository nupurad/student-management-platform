import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/students" style={{ margin: '10px' }}>Students</NavLink>
      <NavLink to="/chat" style={{ margin: '10px' }}>Chat</NavLink>
    </nav>
  );
}
