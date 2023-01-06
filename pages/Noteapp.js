import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { GrDocumentNotes } from "react-icons/gr";
import Newnote from "./../Component/Newnote";

function Noteapp() {
  const [notes, setNotes] = useState([]);

  function addNewNote(newNote) {
    const newNotes = [...notes, newNote];
    newNotes.filter((note) => !note.id && (note.id = uuidv4()));
    setNotes(newNotes);
    console.log(uuidv4());
  }

  function deleteNode(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  function randomColor() {
    let words = "0123456789ABCDEF";
    let colors = "#";
    for (let i = 0; i < 6; i++) {
      colors += words[Math.floor(Math.random() * 16)];
    }
    return colors;
  }

  return (
    <div className="container-fluid">
      <h1 className="mt-2 mb-3" align="center">
        <button className="btn-lg   btn-info" onClick={addNewNote}>
          <GrDocumentNotes style={{ backgroundColor: "#e31bcf" }} size="26px" />{" "}
          Create Notes
        </button>
      </h1>
      <div className="row">
        {notes.map((note) => (
          <div
            key={note.id}
            className="col-sm-6  d-flex mt-3 mb-4  justify-content-center"
          >
            <Newnote note={note} onClick={deleteNode} bgColor={randomColor} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Noteapp;
