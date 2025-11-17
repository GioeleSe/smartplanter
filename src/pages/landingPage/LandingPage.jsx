import NavBar from 'components/navbar/NavBar'
import Footer from 'components/footer/Footer'
import LandingAnimation from 'components/loading_animation/LandingAnimation'
import 'pages/landingPage/LandingPage.css'

function LandingPage() {
  return (
    <>
        <NavBar></NavBar>
        <LandingAnimation></LandingAnimation>
        <Footer></Footer>
    </>
  )
}

export default LandingPage