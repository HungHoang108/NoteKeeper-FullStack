import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);
  const [edit, setEdit] = useState(false)
  const [noteID, setnoteId] = useState("")
  const [editedNote, setEditedNote] = useState({

    title: "" ,
    content: ""
  });

  const keeperId = noteID;


  useEffect(()=> {

    async function fetchData(){
      const heading1 = await axios.get("http://localhost:4000/")
      setNotes(heading1.data);
    }
    fetchData();

}, [])



  function deleteNote(mongoID) {

    axios.delete(`http://localhost:4000/${mongoID}`)
    .then(()=> {
    //   setNotes(prevNotes => {
    //   return prevNotes.filter((noteItem, index) => {
    //     return noteItem !== noteItem._id;
    //   });
    // })
    setNotes(notes.map((oneNote) => {
      return oneNote._id !== mongoID ? oneNote : null
    }))
  });
    window.location.reload();

  }
  // TEST THE RELOAD ISSUE, BUT NOT WORK

  // async function deleteNote(mongoID){
  //   const data = await fetch(`http://localhost:4000/${mongoID}`, {
  //     method: "DELETE"
  //   }).then(res => res.json())
  //   setNotes(notes => notes.filter(note => note._id !== data._id))
  // }


  // FOR EDITING NOTE PART

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

    axios.patch(`http://localhost:4000/update/${keeperId}`, { 
      title: editedNote.title,
      content: editedNote.content
    })
    console.log(keeperId)
    // event.preventDefault();
    setEdit(false);
    window.location.reload();
  }


  return (
    <div>
      <Header />
      <CreateArea 

      />

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

      {notes.map((noteItem, index) => {
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
        
      })}
      <Footer />
    </div>
  );
}

export default App;
