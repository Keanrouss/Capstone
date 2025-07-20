function NavBar() {
  const handleSave = () => {
    alert('Plant added');
  };

  return (
    <nav style={{ background: '#ccc', padding: '1rem', marginBottom: '1rem' }}>
      <span style={{ marginRight: '2rem' }}>🌿 Plant App</span>
      <button onClick={handleSave}>Save</button>
    </nav>
  );
}

export default NavBar;
