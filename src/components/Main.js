import axios from 'axios';
import React, {useState, useEffect} from 'react';


export default function Main(props) {

    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&appid=80879ab40ffedf0e563fb2fe7c692f5a`;

    const [res, setRes] = useState({
        
        
            "coord": {
                "lon": 4.8971,
                "lat": 52.378
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "base": "stations",
            "main": {
                "temp": 292.62,
                "feels_like": 292.42,
                "temp_min": 289.78,
                "temp_max": 296.01,
                "pressure": 1011,
                "humidity": 69
            },
            "visibility": 10000,
            "wind": {
                "speed": 5.66,
                "deg": 310
            },
            "clouds": {
                "all": 20
            },
            "dt": 1656602900,
            "sys": {
                "type": 2,
                "id": 2046553,
                "country": "NL",
                "sunrise": 1656559304,
                "sunset": 1656619564
            },
            "timezone": 7200,
            "id": 2759794,
            "name": "Amsterdam",
            "cod": 200
        }
         
     
     );
    
    
    useEffect(()=> {
        
        fetch(api)
          .then(response => response.json())
          .then(data => setRes(data))
        
    }, [props.loc])



   const [currentTempC, setCurrentTempC] = useState(false);
   const [currentTempK, setCurrentTempK] = useState(true);

   const tempC = res.main.temp - 273.15;
   const tempCF = res.main.feels_like - 273.15;

   function changeTemp() {
    setCurrentTempC(prev=>!prev);
    setCurrentTempK(prev=>!prev);
   }


   console.log(res)


   let icon = res.weather[0].icon;
   let iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`



    return (
        <main>
            <div id='tempDiv'>
                <div id='title'>
                     <h3>{res.name}  <span id='country'>{res.sys.country}</span></h3>
                     {currentTempK && <button id='changeTempBtn' onClick={changeTemp}>Change temperature to Celsius</button>}
                     {currentTempC && <button id='changeTempBtn' onClick={changeTemp}>Change temperature to Kelvin</button>}
                </div>
                {currentTempK && <h1>Current Temperature:<span> {res.main.temp} </span>Kelvin</h1>}
                {currentTempC && <h1>Current Temperature:<span> {tempC.toFixed(2)} </span>Celsius</h1>}
                {currentTempK && <h1>Feels Like: <span>{res.main.feels_like}</span> Kelvin</h1>}
                {currentTempC && <h1>Feels Like: <span>{tempCF.toFixed(2)}</span> Celsius</h1>}
                <h1>Humidity: <span>{res.main.humidity}</span> %</h1>
            </div>

            <div id='iconDiv'>
                <img src={iconURL} alt='weather_icon' width='170px'/>
                <h4>{res.weather[0].description}</h4>
            </div>
        </main>
    )
}

