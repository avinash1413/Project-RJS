function ToDo() {

    function callFun() {
        alert("function call")

    }
    return (
        <div>
            <h1>Avinash ToDos</h1>
            <img src="https://getimg.ai/" alt="Avinash" class="photo" />
            <ul> 
                <li>Step1 Learn React JS</li>
                <li>step 2 Learn Spring Boot</li>
                <li>Step 3 Complete the Project</li>
            </ul>
            <button onClick={callFun}>Click Me</button>
        </div>
    )
}

export default ToDo
