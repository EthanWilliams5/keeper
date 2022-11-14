import React, {useState} from "react"
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
// import notes from "./notes";
import CreateArea from "./components/CreateArea";



//1. Create a new React app.
//2. Create a App.jsx component.
//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.
//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

//HINT: You will need to study the classes in teh styles.css file to apply styling.

function App() {
  const [noteCards, setNoteCards] = useState([]);

  function addNote(title, content) {
    const newNote = {
      title: title,
      content: content
    };
    setNoteCards((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNoteCards((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {noteCards.map((note, i) => {
        return (
          <Note
            id={i}
            key={i}
            title={note["title"]}
            content={note["content"]}
            deleteNote={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}
export default App;