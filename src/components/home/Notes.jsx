import React, { useEffect, useState } from "react";

const Notes = () => {
  const [note, setNote] = useState("");
  const handleChange = (e) => {
    setNote(e.target.value);
    localStorage.setItem("note-data", JSON.stringify(note));
  };
  useEffect(() => {
    const savedNotes = JSON.stringify(localStorage.getItem("note-data"));
    savedNotes.length > 0 && setNote(savedNotes.slice(3, -3));
  }, []);
  return (
    <div className="note-body">
      <h1>All Notes</h1>
      <textarea value={note} name="note" onChange={handleChange} />
    </div>
  );
};

export default Notes;
