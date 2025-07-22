import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {

  const [username, setUsername] = useState('');

  const navigate = useNavigate();

//console.log('logout', LogoutMessage)
  const handleLogin = async(e) => {
    e.preventDefault();

    if (username.trim()) {
      try {
      const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/users/login`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: username.trim() }),
          }
        );

    const user = await response.json()
    console.log(user)
     navigate('/home', {state: user});
  }catch(error){
    console.error ('Error:', error)
  }
      // You can save the username if needed
      //navigate('/home', {state: user});
    } else {
      alert('Username Require');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="Submit">Log In</button>
      </form>
      <Link to='/register'>Register</Link>
    </div>
  );
}

export default Login;

