function NavBar() {
  const handleSave = () => {
    alert('Plant added');
  };

  return (
    <nav style={{ 
        background: 'black', 
        padding: '1rem', 
        marginBottom: '2rem',
        display: "flex"
         }}>
      <h2 style={{ margin: '1rem' }}>🌿 Plant Lover</h2>
      <button onClick={handleSave}>Save</button>
    </nav>
  );
}

export default NavBar;
