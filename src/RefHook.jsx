import { useRef } from "react";

function RefHook() {
    const inputRef= useRef(null);
    const inputHandler=()=>{
        console.log(inputRef);
        inputRef.current.focus();
        inputRef.current.style.color='red'
        inputRef.current.placeholder="Enter Password"
        inputRef.current.value="123456"
    }
    return (
        <>
        <h1>useRef</h1>
        <input ref={inputRef} type="text" placeholder="Enter User Name"/>
        <button onClick={inputHandler}>Focus on Input field</button>

       </>
    )
}


export default RefHook