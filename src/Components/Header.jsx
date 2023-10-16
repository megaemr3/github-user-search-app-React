import React, { useState, useEffect} from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from "@mui/icons-material/DarkMode";

function Header() {

    const [isDarkTheme, setDarkTheme] = useState(true);

  function changeTheme() {
    setDarkTheme(!isDarkTheme);
  }

  useEffect(() => {
    
    if (isDarkTheme) {
    document.documentElement.style.setProperty("--main-color", "#141C2F")
    document.documentElement.style.setProperty("--secondary-color", "#1F2A48")
    document.documentElement.style.setProperty("--text-color", "white")
    document.documentElement.style.setProperty("--link-color", "white")
    } else {
    document.documentElement.style.setProperty("--main-color", "#f2f6fb")
    document.documentElement.style.setProperty("--secondary-color", "#fefefe")
    document.documentElement.style.setProperty("--text-color", "#c7cfd7")
    document.documentElement.style.setProperty("--link-color", "#728eb0")
    }
    }, [isDarkTheme])

    

    return <div className="heading">
    <h1>devfinder</h1>
    <div onClick={changeTheme}>
    {isDarkTheme ? <span>LIGHT <LightModeIcon /></span> : <span>DARK <DarkModeIcon /></span>}
    </div>
    </div>;
}

export default Header;