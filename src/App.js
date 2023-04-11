import React, {useState} from "react";
import SearchBar from "./component/SearchBar";
import UserProfile from "./component/UserProfile";
import {userData} from './component/UserProfile';
import './Styles/app.css'




function App() {
  const [userDetails] = useState(userData);
  const [searchQuery, setSearchQuery] = useState(userData);
  return (
    <div className="app">
      <SearchBar userDetails={userDetails} setSearchQuery={setSearchQuery} />
      <UserProfile searchQuery={searchQuery} />
      
      
    </div>
  );
}


export default App;
