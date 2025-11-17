import './LandingAnimation.css';
import landingImage from 'assets/landingImage.jpg'
function LandingAnimation() {

  return (
    <div className='landing-container'>
        <img src={landingImage} alt="" className='landingImage' />
    </div>
    
  );
}

export default LandingAnimation
