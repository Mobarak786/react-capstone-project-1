import React, { useEffect, useState } from "react";

const Notes = () => {
  const [note, setNote] = useState("");
  const handleChange = (e) => {
    setNote(e.target.value);
    localStorage.setItem("note-data", JSON.stringify(note));
  };
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("note-data"));
    setNote(savedNotes);
  }, []);
  return (
    <div className="note-body">
      <h1>All Notes</h1>
      <textarea
        placeholder="Write something here"
        value={note}
        name="note"
        onChange={handleChange}
      />
    </div>
  );
};

export default Notes;
