import { useRef } from "react";

function UncontrolledComp() {
    const userRef=useRef();
    const passwordRef=useRef();



    const handleForm=(event)=>{
        event.preventDefault();
        const user = document.querySelector("#user").value;
        const password = document.querySelector("password").value;

        console.log(user,password);
    }

     const handleFormRef=(event)=>{
        event.preventDefault();
        const user=userRef.current.value
        const password=passwordRef.current.value
        console.log("handleFormRef",user);
    }
    return(
        <>  
        <h1>UnControlled Component</h1>
        <form action="" method="post" onSubmit={handleForm}>
            <input type="text" id="user" placeholder="Enter User Name"/>
            <br />
            <input type="password" id="password" placeholder="Enter your password" />
            <br /><br />
            <button>Submit</button>
        </form>

        <hr />
        <h1>UnControlled Component with useRef</h1>
        <form action="" method="post" onSubmit={handleFormRef}>
            <input type="text" ref={userRef} id="userRef" placeholder="Enter User Name"/>
            <br />
            <input type="password" ref={passwordRef} id="passwordRef" placeholder="Enter your password" />
            <br /><br />
            <button>Submit with Ref</button>
        </form>

        </>
    )
}

export default UncontrolledComp