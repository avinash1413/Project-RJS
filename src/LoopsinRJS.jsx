import { useState } from "react";

function LoopsinRJS() {
  const [fruits] = useState(["Apple", "Banana", "Orange", "Mango"]);
  const [users] = useState([
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
  ]);
    return (
    <div>
      <h1>Fruits List</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
        <h1>User Information</h1>
        {users.map((user) => (
            <div key={user.id} style={{border: "2px solid blue", margin: "10px", padding: "10px", borderRadius: "10px"}}>
                <h2>Name: {user.name}</h2>
                <p>Age: {user.age}</p>
            </div>
        ))}
    </div>
  );
}

export default LoopsinRJS;