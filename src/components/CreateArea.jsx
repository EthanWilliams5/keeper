import React, {useState} from "react"
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';



export default function CreateArea(props) {
  const [isExpand, setIsExpand] = useState(false)
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

  function expand() {
    setIsExpand(true)
  }

  return (
    <div>
      <form className="create-note">
        {isExpand && <input
          onChange={handleTitleChange}
          name="title"
          placeholder="Title"
          type="text"
          value={title}
        />}
        <textarea
         onClick={expand}
          onChange={handleContentChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpand ? 3 : 1}
          value={note}
        />
        <Zoom in={isExpand}>
          <Fab
            onClick={submitNote}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

