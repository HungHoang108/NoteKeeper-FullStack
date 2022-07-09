import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";
import {Routes, Route} from "react-router-dom";


function App() {
  const [notes, setNotes] = useState([]);
  const [edit, setEdit] = useState(false)
  const [noteID, setnoteId] = useState("")
  const [editedNote, setEditedNote] = useState({

    title: "" ,
    content: ""
  });
  const [noteFilteredArray, setNoteFilteredArray] = useState([]);
  const [searchStatus, setSearchStatus] = useState(true);



  useEffect(()=> {
    async function fetchData(){
      const heading1 = await axios.get("http://localhost:9000/")
      setNotes(heading1.data);
    }
    fetchData();
}, [])


  function deleteNote(mongoID) {
    axios.delete(`http://localhost:9000/${mongoID}`)
    .then(()=> {

    setNotes(notes.map((oneNote) => {
      return oneNote._id !== mongoID ? oneNote : null
    }))
  });
    window.location.reload();
  }


  function editNote(mongoid, id) {
    setEdit(true);
    setnoteId(mongoid)

    setEditedNote({
      title: notes[id].title,
      content: notes[id].content
    });
  }

  function handleEdit(event){
    const {name, value} = event.target; 
    setEditedNote(prevNoted => {
      return {
        ...prevNoted,
        [name]: value
      };
    });  
  }

  function submitNote(){
    axios.patch(`http://localhost:9000/update/${noteID}`, { 
      title: editedNote.title,
      content: editedNote.content
    })
    // event.preventDefault();
    setEdit(false);
    window.location.reload();
  }

  function searchQueryReceived(searchQuery){
    
    const filteredArray= notes.filter((noteFilter)=>{
      return noteFilter.content.toLowerCase().includes(searchQuery)
      
    })
    console.log(filteredArray)
    setNoteFilteredArray(filteredArray)
    setSearchStatus(false)
  }


  return (

      <div>
      <Header
        query={searchQueryReceived}
      />
      <CreateArea />

{edit? 
(
  <div>
    <React.StrictMode>
    <form>
      <input
        name="title"
        onChange={handleEdit}
        value={editedNote.title}
        placeholder="Edit title"
      />
      <textarea
        name="content"
        onChange={handleEdit}
        value={editedNote.content}
        placeholder="Edit your note..."
        rows="3"
      />
      <button onClick={submitNote}>Done</button>
    </form>
    </React.StrictMode>
    
  </div>
) : ""}

{searchStatus? 

  notes.map((noteItem, index) => {
    return (
      <Note
        key={index}
        id={index}
        title={noteItem.title}
        content={noteItem.content}
        mongoID = {noteItem._id}
        onDelete={deleteNote}
        onEditing={editNote}
      />
    );
  })

  : noteFilteredArray.map((noteFilter, index) => {
    return (
      <Note
        key={index}
        id={index}
        title={noteFilter.title}
        content={noteFilter.content}
        mongoID = {noteFilter._id}
        onDelete={deleteNote}
        onEditing={editNote}
      />
    );
  })
}

      {/* {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            mongoID = {noteItem._id}
            onDelete={deleteNote}
            onEditing={editNote}
          />
        );
      })} */}

      {/* {noteFilteredArray.map((noteFilter, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteFilter.title}
            content={noteFilter.content}
            mongoID = {noteFilter._id}
            onDelete={deleteNote}
            onEditing={editNote}
          />
        );
      })} */}

      <Footer />
      </div>

  );
}

export default App;
