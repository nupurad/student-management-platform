import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: '#2e6adb',
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'Roboto'
      }}
    >
      <div style={{ color: 'white', fontWeight: 'bold', fontSize: '23px' }}>
        Student Platform
      </div>
      <div>
        <NavLink
          to="/students"
          style={({ isActive }) => ({
            color: isActive ? '#000' : 'white',
            marginRight: '15px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '20px',
          })}
        >
          Students
        </NavLink>
        <NavLink
          to="/chat"
          style={({ isActive }) => ({
            color: isActive ? '#000' : 'white',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '20px',
          })}
        >
          Chat
        </NavLink>
      </div>
    </nav>
  );
}
