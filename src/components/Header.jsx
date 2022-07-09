import React from "react";



function Header(props) {

  function searchForNotes(event){
    const searchQuery = event.target.value.toLowerCase();
    props.query(searchQuery);
  }
  return (
    <header>
        <h1>Keeper</h1>
        <button className="signin">Login</button>
        <input 
        onChange={searchForNotes}
        className="noteSearch" placeholder="search"></input>

    </header>
  );
}

export default Header;
