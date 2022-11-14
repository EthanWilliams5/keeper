import React, {useState} from "react"


export default function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  function handleTitleChange(e) {
    const newTitle = e.target.value;

    setTitle(newTitle);
  }

  function handleContentChange(e) {
    const newNote = e.target.value;

    setNote(newNote);
  }

  function submitNote(e) {
    e.preventDefault()
    props.addNote(title, note);
    setNote("");
    setTitle("");
  }

  return (
    <div>
      <form>
        <input
          onChange={handleTitleChange}
          name="title"
          placeholder="Title"
          type="text"
          value={title}
        />
        <textarea
          onChange={handleContentChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note}
        />
        <button
          onClick={submitNote}
        >
          Add
        </button>
      </form>
    </div>
  );
}

