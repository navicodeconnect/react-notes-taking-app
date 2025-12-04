import React, { useState } from "react";

import "./newNoteCard.css";

export const NewNoteCard = ({ notes, setNotes }) => {
  const [noteText, setNoteText] = useState("");

  const generateId = () =>
    window.crypto?.randomUUID?.() ||
    Math.random().toString(36).slice(2) + Date.now().toString(36);

  const wordLimit = 250;
  const addNote = () => {
    if (!noteText.trim()) return;

    const newNote = {
      id: generateId(),
      text: noteText,
      date: new Date().toLocaleDateString(),
    };

    setNotes([...notes, newNote]);
    setNoteText("");
  };

  return (
    <div className="new-note-card">
      <textarea
        className="textarea"
        value={noteText}
        onChange={(e) => {
          setNoteText(e.target.value);
        }}
        placeholder="Type to add a note"
        maxLength={wordLimit}
      ></textarea>
      <div className="new-card-footer">
        <span className="word-count-msg">
          {wordLimit - noteText.length} Remaining
        </span>
        <button className="save-btn" onClick={addNote}>
          Save
        </button>
      </div>
    </div>
  );
};
