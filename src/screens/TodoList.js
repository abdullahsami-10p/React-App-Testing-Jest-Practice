import React, { useState } from "react";
import AppHeader from "../components/AppHeader";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import deleteIcon from "../assets/images/delete.png";

function TodoList() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const addTodo = () => {
    if (text != "") {
      setTodo([...todo, text]);
      setText("");
    } else {
      toast.error("Write some todo", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div style={styles.container}>
      <AppHeader />
      <ToastContainer />

      <div style={styles.inputContainer}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter Todo"
            aria-label="Todo"
            aria-describedby="basic-addon2"
            onChange={handleChange}
            value={text}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={addTodo}>
              Add
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
      <ul>
        {todo.map((item, i) => {
          return (
            <li key={i}>
              {item}
              <img
                src={deleteIcon}
                style={styles.deleteIcon}
                onClick={() => {
                  let arr = [...todo];
                  arr.splice(i, 1);
                  setTodo(arr);
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

let styles = {
  container: {
    backgroundColor: "white",
    flex: 1,
    height: "100vh",
  },
  inputContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    paddingLeft: "10%",
    paddingRight: "10%",
    marginTop: 20,
  },
  deleteIcon: { width: 15, height: 13, marginLeft: 20 },
};
export default TodoList;
