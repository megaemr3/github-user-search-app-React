import React from "react";
import SearchIcon from '@mui/icons-material/Search';

function Input(props) {
    function handleChange(event) {
        props.setInputText(event.target.value);
    }

    function fetchData(event) {
        fetch(`https://api.github.com/users/${props.inputText}`)
        .then(response => response.json())
        .then(data => {

            props.setUserInfo([handleDate(data)]);
            props.setInputText("");
            
        })
        
        event.preventDefault();
    }

    function handleDate(obj) {
     const date = new Date(obj.created_at);
     const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let value = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
    
        return {...obj,
         created_at: value
        }
    
    }


    console.log("Input is rendered")
    return <div className="inputArea">
    <SearchIcon />
    <input onChange={handleChange} value={props.inputText} type="text" name="userName" placeholder="Search GitHub username..."></input>
    <button onClick={fetchData}>Search</button>
</div>;
}

export default Input;