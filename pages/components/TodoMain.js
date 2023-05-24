import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import LoginPage from "./LoginPage";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";

import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { useAuth0 } from "@auth0/auth0-react";

import styles from "../stylesheets/TodoMain.module.scss";

const TodoList = () => {
  const { isAuthenticated, user } = useAuth0();

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [tempTodos, setTempTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    console.log(user);
  }, [user]);

  useEffect(() => {
    setTempTodos([...todos]);
  }, [todos]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTempTodos([...tempTodos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTempTodos = tempTodos.filter((_, i) => i !== index);
    setTempTodos(updatedTempTodos);
  };

  const handleToggleTodo = (index) => {
    const updatedTempTodos = [...tempTodos];
    updatedTempTodos[index].completed = !updatedTempTodos[index].completed;
    setTempTodos(updatedTempTodos);
    const count = updatedTempTodos.filter((todo) => todo.completed).length;
    setCompletedCount(count);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return; // If dropped outside a droppable area, do nothing

    const updatedTempTodos = Array.from(tempTodos);
    const [reorderedItem] = updatedTempTodos.splice(result.source.index, 1); // Remove the item from the source position
    updatedTempTodos.splice(result.destination.index, 0, reorderedItem); // Insert the item at the destination position

    setTempTodos(updatedTempTodos);
  };

  const handleSaveChanges = () => {
    setTodos(tempTodos);
    setTempTodos([]);
  };

  const handleDiscardChanges = () => {
    setTempTodos(todos);
  };

  const handleEditTodo = (index) => {
    setEditIndex(index);
    setEditValue(tempTodos[index].text);
  };

  const handleEditInputChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleEditSave = () => {
    const updatedTempTodos = [...tempTodos];
    updatedTempTodos[editIndex].text = editValue;
    setTempTodos(updatedTempTodos);
    setEditIndex(null);
    setEditValue("");
  };

  const handleEditCancel = () => {
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <>
      {isAuthenticated ? (
        <div className={styles.mainContainer}>
          <SideBar tasksLength={tempTodos.length} completedTasks={completedCount} />
          <div className={styles.todoContainer}>
            <div className={styles.topBar}>
              <div className={styles.emptySpace}></div>
              <div className={styles.searchBarContainer}>
                <input
                  className={styles.searchBar}
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Add a new task..."
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleAddTodo();
                    }
                  }}
                />
                <FontAwesomeIcon icon={faPlus} className={styles.iconPlus} onClick={handleAddTodo} />
              </div>
              <div className={styles.profileInfo}>
                <img className={styles.profilePic} src={user.picture} alt="user_pic" />
              </div>
            </div>

            <DragDropContext onDragEnd={handleDragEnd}>
              <Droppable droppableId="todos">
                {(provided) => (
                  <ul className={styles.ul} {...provided.droppableProps} ref={provided.innerRef}>
                    {tempTodos.length == 0 && (
                      <>
                        <p style={{ fontStyle: "italic" }}>You currently haven't any tasks.</p>
                        <p style={{ fontStyle: "italic" }}>You can add new tasks by typing in the text field</p>
                      </>
                    )}
                    {tempTodos.map((todo, index) => (
                      <Draggable key={index} draggableId={`todo-${index}`} index={index}>
                        {(provided) => (
                          <li
                            className={styles.todoItem}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {editIndex === index ? (
                              <div className={styles.todoContent}>
                                <div>
                                  <input className={styles.editField} type="text" value={editValue} onChange={handleEditInputChange} />
                                </div>
                                <div className={styles.editButtons}>
                                  <Button onClick={handleEditSave} size="small">
                                    Save
                                  </Button>
                                  <Button color="error" onClick={handleEditCancel} size="small">
                                    Cancel
                                  </Button>
                                </div>
                              </div>
                            ) : (
                              <div className={styles.todoContent}>
                                <span
                                  style={{
                                    textDecoration: todo.completed ? "line-through" : "none",
                                    marginRight: "10px"
                                  }}
                                >
                                  <Checkbox
                                    className={styles.checkBox}
                                    checked={todo.completed}
                                    onChange={() => handleToggleTodo(index)}
                                    inputProps={{ "aria-label": "controlled" }}
                                  />

                                  {todo.text}
                                </span>
                                <div>
                                  <FontAwesomeIcon icon={faEdit} className={styles.iconEdit} onClick={() => handleEditTodo(index)} />
                                  <FontAwesomeIcon icon={faTrash} className={styles.iconDelete} onClick={() => handleDeleteTodo(index)} />
                                </div>
                              </div>
                            )}
                          </li>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </DragDropContext>
            <div className={styles.bottomButtons}>
              <Button variant="contained" startIcon={<CheckIcon />} onClick={handleSaveChanges} disabled={tempTodos.length === 0}>
                Save Changes
              </Button>
              <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                color="error"
                onClick={handleDiscardChanges}
                disabled={tempTodos.length === 0}
              >
                Discard changes
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <LoginPage />
      )}
    </>
  );
};

export default TodoList;
