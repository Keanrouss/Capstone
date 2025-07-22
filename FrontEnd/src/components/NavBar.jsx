import React from 'react';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.left}>
      <h1 style={styles.logo}>🌿 Plant App</h1>
      </div>
      <div style={styles.links}>
        <Link to="/home" style={styles.link}>Home</Link>
        <Link to="/favorites" style={styles.link}>Favorites</Link>
        <Link to="/Dashboard" style={styles.link}>Dashboard</Link>
        <Link to="/logout" style={styles.link}>Logout</Link>
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
    backgroundColor: '#89c98cff',
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
