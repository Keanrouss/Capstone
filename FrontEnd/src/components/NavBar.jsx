import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function NavBar({userId}) {
  const navigate = useNavigate();


  const handleLogout = () => { //handlelogout is the function that is realted to logging out

    localStorage.removeItem('user') //this localStorage.removeItem('user')/ localstorage keep tracks of the user while on website/
    // .removeitem('user') is the deignated item to be remove/ not track once they've log out. And full line12 
    // is what promoting full logout of the user and not keep track.

    navigate('/', {state:{message:"You've successfully logged out!" }}); //supposed to say this message after
    //they've log out but it is not work! oh, well
   console.log("hello")
  }

  return ( //what's being return once function/requests have been sent
    <nav style={styles.nav}>
      <div style={styles.left}>
      <h1 style={styles.logo}>🌿 Plant-U-ZY</h1>
      </div>

      {/* the links below allow users to navigate to the desired page based on what their selection.
      example...if they click on Favorites. They will be brought up to the "favorite" page */}

      <div style={styles.links}> 
        <Link to="/home" style={styles.link}state={{userId}}>Home</Link>
        <Link to="/favorites" style={styles.link} state={{userId}}>Favorites</Link>
        <Link to="/AboutUS" style={styles.link}>About Us</Link>

        {/* '/' represent the login page so when user click logout..
        it will bring them back to the login page */}

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
