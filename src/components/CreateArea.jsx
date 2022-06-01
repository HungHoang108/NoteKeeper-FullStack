import React, { useState, useEffect } from "react";
import axios from "axios";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }


  function submitNote() {
   
    setNote({
      title: "",
      content: ""
    });

    axios.post("http://localhost:9000/", note)
    .then(response => console.log(response.data))
    
  }

  return (
    <div>
      <React.StrictMode>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
      </React.StrictMode>
    </div>
  );
}

export default CreateArea;
