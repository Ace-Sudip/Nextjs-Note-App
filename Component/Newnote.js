import React, { useState, useEffect } from "react";
import { MdOutlineNoteAlt, MdDeleteForever } from "react-icons/md";

function Newnote({ note, onClick, text, bgColor }) {
  const [newColor, setNewColor] = useState("");
  useEffect(() => {
    !newColor && setNewColor(bgColor);
  }, [bgColor, newColor]);
  console.log(newColor);
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title" style={{ backgroundColor: `${newColor}` }}>
            <div className="d-flex justify-content-between h3">
              <MdOutlineNoteAlt />
              <MdDeleteForever
                className="deleteicon"
                onClick={() => onClick(note.id)}
              />
            </div>
          </h5>

          <div className="form-group">
            <p className="card-text">
              <textarea
                placeholder="Write note"
                className="form-control rounded-0"
                rows="3"
              >
                {text}
              </textarea>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newnote;
