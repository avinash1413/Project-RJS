import { useEffect, useState } from "react"; // Importing useEffect and useState hooks from React


function UseEffect() {
    const [Counter, setCounter] = useState(0);
    const [data, setData] = useState({});

    useEffect(() => {  // Effect runs when 'Counter' changes
        console.log("UseEffect Called");  // This will run on every render
        fetch('https://jsonplaceholder.typicode.com/todos/1') // Fetching data from API
            .then(response => response.json()) // Converting response  to JSON
            .then(json => setData(json))  // Setting fetched data to state;
    }, [Counter]);  // Dependency array with 'Counter' means this effect runs whenever 'Counter' changes
    // Note: If the dependency array is empty, the effect runs only once after the initial render.  
    // If there is no dependency array, the effect runs after every render.
    // Here, it runs whenever 'Counter' updates.
    return (
        <div>
            <h1>UseEffect Example</h1>
            <h2>Counter : {Counter}</h2>
            <button onClick={() => setCounter(Counter + 1)}>Update Counter</button>  {/* Button to update Counter */}
            <h3>Data from API:</h3>
            <pre>{JSON.stringify(data, null, 2)}</pre>  {/* Displaying fetched data */}
        </div>
    )   

}

export default UseEffect;
