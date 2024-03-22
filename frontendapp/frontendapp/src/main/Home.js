import React from 'react'
import './style.css'
import CarouselPage from './CarouselPage';
import Mainquote from './Mainquote';
import Footer from './Footer';
import VehicleSection from './VehicleSection';
export default function Home() {


  // const containerStyle = {
  //   backgroundImage: `url("https://wallpapercave.com/wp/wp1847737.jpg")`,
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: 'center',
  //   minHeight: '92vh',
  //   display: 'flex',
  //   // flexDirection: 'column', // Stack children vertically
  //   // justifyContent: 'flex-start', // Align children to the top
  //   // alignItems: 'flex-start', // Align children to the left
  //   // padding: '05px', // Add padding for better readability
  //   // color: '#ffffff', // Text color on top of the background image
  // };

  return (
    <div>
        {/* <div style={containerStyle} >
      <h1 style={{color:"white" }}>displaying the home background image here</h1>
      </div>
      <br/> */}
      <CarouselPage/>
      <Mainquote/>
      <br/>
      <VehicleSection/>
      <br/>
      <Footer/>
    </div>
  )
}
