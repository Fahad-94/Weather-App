import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import {coords} from './components/Data';
import React, {useState} from 'react';




function App() {

  const [location, setLocation] = useState(coords[0]);

  function updateLocation(id) {
      let newLoc;

      for (let i = 0; i < coords.length; i++) {
        if (coords[i].id === id) {
          newLoc = coords[i];
        }
      }
      
      setLocation(newLoc);
  }

  function currentPosition() {
    navigator.geolocation.getCurrentPosition(position => {
      setLocation({
        ...position,
        lat : position.coords.latitude,
        lon : position.coords.longitude,
      })
    })
  }


  return (
    <div className="App">
      <Header 
          updateLocation = {updateLocation}
          currentPosition = {currentPosition}
      />
      <Main
         loc = {location.location}
         lat = {location.lat}
         lon = {location.lon}
       />
    </div>
  );
}

export default App;
