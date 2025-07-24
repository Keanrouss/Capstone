import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (username.trim()) {
      try {
      const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/users/register`,
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
    navigate('/')
  }catch(error){
    console.error ('Error:', error)
  }
      // You can save the username if needed
      //navigate('/Login');
    } else {
      alert('Create an account');
    }
  };

  return (
    <div style={{ padding: '2rem'}}>
      <img src="/registerpage.jpg" alt="RegisterPhoto" className='Registrationlook'/>
      <h2>Register</h2>
      <form
      onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="Submit">Register</button>
        <Link to='/'>Log In</Link>
      </form>
      </div>
  );
}

export default Register;
