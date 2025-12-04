import React from "react";
import "./noteList.css";
import { NoteCard } from "./NoteCard";
import { NewNoteCard } from "./NewNoteCard";

export const NoteList = ({ notes, setNotes, searchText, setSearchText }) => {
  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchText.toLowerCase().trim())
  );
  return (
    <div className="notelist-container">
      {(searchText.trim() ? filteredNotes : notes).map(
        ({ id, text, date }) => (
          <NoteCard
          key={id}
          id={id}
          text={text}
          date={date}
          notes={notes}
          setNotes={setNotes}
          />
        ))}
        <NewNoteCard notes={notes} setNotes={setNotes} />
    </div>
  );
};
