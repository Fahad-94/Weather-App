

function Header(props) {

    return (
        <header>
            <button className="headerBtn" id="btnCurrent" onClick={props.currentPosition}>Disply my weather</button>

            <div id="dropdown">
                <button className="headerBtn" id="dropdownBtn">Choose a city</button>
                <div id="dropdown-content">
                    <p onClick={()=> props.updateLocation(1)}>Amsterdam</p>
                    <p onClick={()=> props.updateLocation(2)}>London</p>
                    <p onClick={()=> props.updateLocation(3)}>Paris</p>
                    <p onClick={()=> props.updateLocation(4)}>New York</p>
                    <p onClick={()=> props.updateLocation(5)}>Brussels</p>
                    <p onClick={()=> props.updateLocation(6)}>Beijing</p>
                </div>
            </div>

        </header>
    )
}

export default Header;