import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (username.trim()) {
      // You can save the username if needed
      navigate('/Login');
    } else {
      alert('Create an account');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Registration Page</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="Submit">Register</button>
      </form>
      <Link to='/'>Log In</Link>
    </div>
  );
}

export default Register;
