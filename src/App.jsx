import React, { useEffect } from "react";
import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { Header } from "./components/Header";
import { NoteList } from "./components/NoteList";

import "./App.css";

export const App = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes") || "[]")
  );
  const [searchText, setSearchText] = useState("");
  
  useEffect(()=>{
    localStorage.setItem("notes" , JSON.stringify(notes))
  },[notes])


  return (
    <>
      <Header />
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <NoteList
        notes={notes}
        setNotes={setNotes}
        searchText={searchText}
        setSearchText={setSearchText}
      />
    </>
  );
};
