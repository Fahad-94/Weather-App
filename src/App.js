import './App.css';
import Header from './components/Header';
import Main from './components/Main';
// import {coords} from './components/Data';
import React, {useEffect, useState} from 'react';



function App() {

  const [location, setLocation] = useState({
    location: 'Amsterdam',
    lat : 52.377956,
    lng : 4.897070
  });
  const [city, setCity] = useState('amsterdam');

  const api_key = process.env.REACT_APP_API_KEY_2;

  const api = `https://api.opencagedata.com/geocode/v1/json?q=URI-ENCODED-${city}&key=${api_key}`;
  

  function updateLocation(city) {
      // let newLoc;

      // for (let i = 0; i < coords.length; i++) {
      //   if (coords[i].id === id) {
      //     newLoc = coords[i];
      //   }
      // }
      
      // setLocation(newLoc);
      let inputCity = city.trim().toUpperCase();

      setCity(inputCity);

  }
  
  useEffect(() => {
        fetch(api)
         .then(res => res.json())
         .then(data => {

          if (data.total_results !== 0) {
          setLocation(prev => ({
            ...prev,
            lat : data.results[0].geometry.lat,
            lng : data.results[0].geometry.lng})
          )
         } else {
          alert('Invalid location!');
         }
        
        } 
         
         )
         
      }, [api])

  function currentPosition() {
    navigator.geolocation.getCurrentPosition(position => {
      setLocation({
        ...position,
        lat : position.coords.latitude,
        lng : position.coords.longitude,
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
         lon = {location.lng}
       />
    </div>
  );
}

export default App;
