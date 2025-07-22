import NavBar from "../components/NavBar"

function Favorites({ favorites }) {
  return (
    <div>
      <NavBar/>
      <h2>My Favorite Plants</h2>
      </div>
  )
}
const styles = {
  card: {
    border: '1px solid green',
    padding: '1.5rem',
    margin: '1rem',
    width: '200px',
    borderRadius: '10px',
    backgroundColor: '#9dc29dff',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  link: {
    textDecoration: 'none',
    color: 'green',
    fontWeight: 'bold',
  },
};

export default Favorites