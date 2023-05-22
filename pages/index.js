import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [tempTodos, setTempTodos] = useState([]);

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
    setTempTodos([]);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add</button>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {tempTodos.map((todo, index) => {
                if (todo.completed) return null; // Skip rendering completed todos
                return (
                  <Draggable key={index} draggableId={`todo-${index}`} index={index}>
                    {(provided) => (
                      <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        {todo.text}
                        <button onClick={() => handleToggleTodo(index)}>{todo.completed ? "Undo" : "Done"}</button>
                        <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <button onClick={handleSaveChanges}>Save Changes</button>
      <button onClick={handleDiscardChanges}>Discard Changes</button>
    </div>
  );
};

export default TodoList;
