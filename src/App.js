import React, { useState } from "react";

function App() {
  const [people, setPeople] = useState([
    {
      name: "Marcos",
      lastName: "Mora",
      age: 23,
      favouriteFood: "Pizza",
      favouriteColour: "Red",
      counter: 0,
    },
  ]);

  const [name, setName] = useState("");
  const [lastName, setLastname] = useState("");
  return (
    <div className="App">
      <input
      type="text"
      name="name"
      onChange={(event) => {
        setName(event.target.value);
      }}
      />
      <input
      type="text"
      name="lastName"
      onChange={(event) => {
        setLastname(event.target.value);
      }}
      />
      <button
      onClick={() => {
        setPeople((current) => [{ name, lastName }, ...current]);
      }}
      >
        Add user
      </button>
      <ul>
      {people.map((person, idx) => (
        <li id={idx}>{`${person.name} ${person.lastName}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
