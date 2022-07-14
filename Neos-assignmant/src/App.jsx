
import React, { useState } from "react";
import Header from "./Components/Header";

import Note from "./Components/Note";
import CreateArea from "./Components/CreateArea";
import "./App.css"


function App() {


  return (
    <div>
      <Header />
      <CreateArea />
      {/* {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })} */}
      <Note/>
    </div>
  );
}

export default App;
