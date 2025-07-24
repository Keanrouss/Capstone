// file created and pass to favorite/home to promote easy displaying of the plantcards.
const styles = {
  plantCardContainer: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};

const PlantCardContainer = ({ children }) => {
  return <div style={styles.plantCardContainer}>{children}</div>;
};

export default PlantCardContainer;
