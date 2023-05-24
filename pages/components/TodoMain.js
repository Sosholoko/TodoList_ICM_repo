import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import LoginPage from "./LoginPage";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import GeneralDialog from "../components/modal/GeneralDialog";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { useAuth0 } from "@auth0/auth0-react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styles from "../stylesheets/TodoMain.module.scss";

const TodoList = () => {
  const { isAuthenticated, user } = useAuth0();

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [tempTodos, setTempTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [completedCount, setCompletedCount] = useState(0);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(Array(todos.length).fill(null));
  const [selectedStatus, setSelectedStatus] = useState(Array(todos.length).fill(""));
  const [todoIndex, setTodoIndex] = useState();

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

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
    setIsSnackbarOpen(true);
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

  const handleCloseSnackbar = () => {
    setIsSnackbarOpen(false);
  };

  const handleStatusMenuOpen = (event, index) => {
    setAnchorEl(event.currentTarget);
    setSelectedStatus(tempTodos[index].status);
    setTodoIndex(index);
  };

  const handleStatusMenuClose = () => {
    setAnchorEl(null);
  };

  const handleStatusMenuItemClick = (status) => {
    const updatedTempTodos = [...tempTodos];
    updatedTempTodos[todoIndex].status = status;
    setTempTodos(updatedTempTodos);
    setSelectedStatus(status);
    handleStatusMenuClose();
  };

  return (
    <>
      {isAuthenticated ? (
        <div className={styles.mainContainer}>
          <Snackbar
            open={isSnackbarOpen}
            onClose={handleCloseSnackbar}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: "bottom", horizontal: "right", offsetY: "-20px" }}
          >
            <Alert severity="success" sx={{ width: "100%" }}>
              Your changes were saved successfully !
            </Alert>
          </Snackbar>
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
                        <p style={{ fontStyle: "italic", color: "gray" }}>You currently haven't any tasks.</p>
                        <p style={{ fontStyle: "italic", color: "gray" }}>You can add new tasks by typing in the text field</p>
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

                                <div className={styles.sideButtons}>
                                  <div>
                                    <Badge
                                      badgeContent={todo.status ? todo.status : "New"}
                                      color={
                                        todo.status == "New"
                                          ? "success"
                                          : todo.status == "In Progress"
                                          ? "primary"
                                          : todo.status == "Later"
                                          ? "secondary"
                                          : "success"
                                      }
                                      anchorOrigin={{
                                        vertical: "top",
                                        horizontal: "left"
                                      }}
                                    >
                                      <Button
                                        className={styles.statusButton}
                                        color="inherit"
                                        onClick={(event) => handleStatusMenuOpen(event, index)}
                                        size="small"
                                      >
                                        Status
                                      </Button>
                                    </Badge>
                                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleStatusMenuClose}>
                                      <MenuItem onClick={() => handleStatusMenuItemClick("New", index)} selected={selectedStatus === "New"}>
                                        New
                                      </MenuItem>
                                      <MenuItem
                                        onClick={() => handleStatusMenuItemClick("In Progress", index)}
                                        selected={selectedStatus === "In Progress"}
                                      >
                                        In Progress
                                      </MenuItem>
                                      <MenuItem
                                        onClick={() => handleStatusMenuItemClick("Later", index)}
                                        selected={selectedStatus === "Later"}
                                      >
                                        For Later
                                      </MenuItem>
                                    </Menu>
                                  </div>
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

              <GeneralDialog
                title={"Discard Changes"}
                message={"Are you sure you want to discard last changes ? It will restore last saved version."}
                cancel={"Cancel"}
                confirm={"Yes"}
                button={"Discard changes"}
                confirmAction={() => handleDiscardChanges()}
                startIcon={<DeleteIcon />}
                color={"error"}
                disabled={tempTodos.length === 0}
              />
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
