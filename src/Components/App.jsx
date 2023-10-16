import React ,{useState} from "react";
import Header from "./Header";
import Input from "./Input";
import Card from "./Card";


function App() {
  
    const [inputText, setInputText] = useState("");
   const [userInfo, setUserInfo] = useState([]);
   
    return <div>
        <Header />
        <Input 
        inputText={inputText}
        setInputText={setInputText}
        setUserInfo={setUserInfo}
        userInfo={userInfo}
        />
        {userInfo.map((item, index) => <Card key={index} userInfo={item} />)}
    </div>
}


export default App;