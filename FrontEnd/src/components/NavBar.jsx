import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function NavBar() {
  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem('user')

    navigate('/', {state:{message:"You've successfully logged out!" }});
   console.log("hello")
  }

  return (
    <nav style={styles.nav}>
      <div style={styles.left}>
      <h1 style={styles.logo}>🌿 Plant App</h1>
      </div>
      <div style={styles.links}>
        <Link to="/home" style={styles.link}>Home</Link>
        <Link to="/favorites" style={styles.link}>Favorites</Link>
        <Link to="/dashboard" style={styles.link}>Dashboard</Link>
        <Link to = "/" onClick={handleLogout} style={styles.link}>Logout</Link>
      </div>
    </nav>
  );
}


const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#69b3acff',
    color: 'white'
  },
  logo: {
    margin: 0
  },
  links: {
    display: 'flex',
    gap: '1rem'
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  }
};


export default NavBar;
