function ArrayLoop() {
  const userData = [
    { 
        id: 1, 
        name: "Alice", 
        age: 22 
    },
    { 
        id: 2, 
        name: "Bob", 
        age: 25 
    },
    { 
        id: 3, 
        name: "Charlie", 
        age: 23 
    }
  ];
  return (
    <div>
      <h1>User Data List</h1>
      <table border="1" cellPadding="10" cellSpacing="0"> 
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
        </thead>
        <tbody>
        {userData.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
          </tr>
        ))}
        </tbody>
      </table>
        <h1>Detailed User Information</h1>
        {userData.map((user) => (
          <div key={user.id} style={{border: "3px solid red", margin: "10px", padding: "10px", borderRadius: "10px"}}>
            <h2>ID: {user.id}</h2>
            <h2>Name: {user.name}</h2>
            <h2>Age: {user.age}</h2>
          </div>
        ))}
    </div>
  );
}

export default ArrayLoop;