import './App.css';
import React, { Component } from 'react';
import Clarifai from 'clarifai';
// import particles from 'react-tsparticles';
// import {loadslim} from 'tsparticles-slim';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import Imagelinkform from './Components/Imagelinkform/Imagelinkform';
import Rank from './Components/Rank/Rank';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition'

// const app = new Clarifai.App({
//   apiKey: 'f9cb39a41ce24ba4be9047e3c7cf0a20'
//  });

// const particlesoptions = {
//   particles: { 
//     number: {
//       value: 30,
//     },
//     color: {
//       value: '#00d9bb',
//     },
//     size_area: {
//       value: 50,
//     },
//     size: {
//       value: 5,
//     },
//     move: {
//       speed: 5,
//     },
//     },
//   };

class App extends Component  {
  constructor() {
    super ();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value)
  }

  onButtonSubmit =() => {
    console.log('click')
    app.model.predict(
      'a403429f2ddf4b49b307e319f00e528b',
       'https://samples.clarifai.com/face-det.jpg')
       .then(
      function(response) {
        console.log(response)
        //do something with response
      },
      function(err){
        //there was an error
      }
    );
  }
  render() {
    return (
      <div className="App">
        {/* <Particles className='particles'
          params={particlesoptions} 
          /> */}
        <Navigation />
        <Logo />
        <Rank />
        <Imagelinkform onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>  
        <FaceRecognition/>
      </div>
    );
  };
}

export default App;
