import { useEffect } from "react";

const ReactLifeCycle = ({count, data}) => {
    useEffect(() => {
        console.log("Counter Component Mounting Phase");
        }, []); // Empty dependency array means this effect runs only once after the initial render.
        // If there is no dependency array, the effect runs after every render.

        useEffect(() => {
        console.log("Counter Component Updating Phase");
        }, [count]); // Effect runs when 'count' or 'data' changes

        useEffect(() => {
        return () => {
            console.log("Counter Component Unmounting Phase");
        }
        }, []) // Cleanup function runs when the component is unmounted


    return (
        <div>
            <h2>Counter Component</h2>
            <h3>Count: {count}</h3>
            <h3>Data Title: {data.title}</h3>
        </div>
    )
}

export default ReactLifeCycle;
