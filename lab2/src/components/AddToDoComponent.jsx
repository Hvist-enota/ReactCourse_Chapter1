import React from 'react';

function AddToDoComponent({ title, onTitleChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={title}
        onChange={onTitleChange}
        placeholder="Додати нове завдання"
      />
      <button type="submit">Додати ToDo</button>
    </form>
  );
}

export default AddToDoComponent;
