import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username.trim()) {
      // You can save the username if needed
      navigate('/Dashboard');
    } else {
      alert('enter a username.');
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
    </div>
  );
}

export default Login;

