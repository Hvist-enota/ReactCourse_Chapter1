import React from 'react';

function ToDoTable({ toDos, onRemove }) {
  return (
    <ul>
      {toDos.map((toDo) => (
        <li key={toDo.id}>
          {toDo.title}
          <button onClick={() => onRemove(toDo.id)}>Видалити</button>
        </li>
      ))}
    </ul>
  );
}

export default ToDoTable;
