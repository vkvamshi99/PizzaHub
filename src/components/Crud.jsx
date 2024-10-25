import React, { useState } from "react";

const Crud = () => {
  const [user, setUser] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  function handleClick() {
    if (user.trim().length === 0) return;
    if (isEditing) {
      const updatelist = [...list];
      updatelist[editIndex] = user;
      setList(updatelist);
      setEditIndex(null);
      setIsEditing(false);
    } else {
      setList([...list, user]);
    }

    setUser("");
  }

  function handleDelete(name) {
    const updatedList = list.filter((item) => item !== name);
    setList(updatedList);
  }

  function handleUpdate(index) {
    setUser(list[index]);
    console.log(list[index]);
    setIsEditing(true);
    setEditIndex(index);
    setUser("");
  }

  return (
    <div>
      <h1>CRUD using React</h1>
      <input
        type="text"
        placeholder="Enter username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button onClick={handleClick}>{isEditing ? "update" : "Add"}</button>
      <ul>
        {list.map((name, index) => (
          <li key={index}>
            {name}
            <span>
              <button onClick={() => handleDelete(name)}>Delete</button>
              <button onClick={() => handleUpdate(index)}>Update</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Crud;
