function User({displayName, name, getUser}){
    // const name="Avinash"
    return(
        <div>
            <button onClick={()=>displayName(name)}>Display Name</button>
            <button onClick={()=>getUser()}>Get User</button>
        </div>
    )
}

export default User