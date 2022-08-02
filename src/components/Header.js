import {useState} from 'react';

function Header(props) {

    const [city, setCity] = useState('');


    function enterKey(e)  {
        e.preventDefault();
        props.updateLocation(city);
        setCity('');
    }

    return (
        <header>
            <button className="headerBtn" id="btnCurrent" onClick={props.currentPosition}>Display My Weather</button>

            {/* <div id="dropdown">
                <button className="headerBtn" id="dropdownBtn">Choose a city</button>
                <div id="dropdown-content">
                    <p onClick={()=> props.updateLocation(1)}>Amsterdam</p>
                    <p onClick={()=> props.updateLocation(2)}>London</p>
                    <p onClick={()=> props.updateLocation(3)}>Paris</p>
                    <p onClick={()=> props.updateLocation(4)}>New York</p>
                    <p onClick={()=> props.updateLocation(5)}>Brussels</p>
                    <p onClick={()=> props.updateLocation(6)}>Beijing</p>
                </div>
            </div> */}

            <form className="search-div" onSubmit={enterKey}>
                <input type='text' placeholder='Choose a location' value={city} onChange={(e)=>{setCity(e.target.value)}}/>
                <button type='submit' >Display Weather</button>
            </form>

        </header>
    )
}

export default Header;