import React from "react";
// import axios from "axios";

function Note(props) {
  function handleClick() {
    props.onDelete(props.mongoID);
    // axios.delete(`http://localhost:4000/${props.mongoID}`)
  }

  function handleEditing() {
    props.onEditing(props.mongoID, props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleEditing}>Update</button>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}

export default Note;
