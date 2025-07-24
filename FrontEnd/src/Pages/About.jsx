import React from 'react';
import NavBar from '../components/NavBar';


function AboutUs() {
  return (
    <div>
      <NavBar />
      <div className='AboutView'>
        <h2>About Plant-U-ZY</h2>
        <div className='about-box'>
          <p>Welcome to <strong>Plant-U-ZY</strong> , your go-to destination for discovering and learning about all kinds of plants!
            Whether you're a beginner plant parent or a seasoned botanist,
            our site helps you explore plant care tips, find your perfect houseplant,
            Grow your knowledge. You can save your favorite plants. 🌱
          </p>
        </div>
        <h3>Here you can learn about plants and be obssess.</h3>
      </div>
    </div>
  );
}

export default AboutUs;
