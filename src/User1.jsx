function User1({user}) {
  return (
    <div>

      {/* <h2>User Component</h2>  */}
      <hr />
      <h3>Name: {user.name}</h3>
      <h3>Age: {user.age}</h3>
      <h3>Email: {user.email}</h3>
    </div>
  )
}

export default User1;