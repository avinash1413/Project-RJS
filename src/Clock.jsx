import { useEffect, useState } from "react";

const Clock=({color})=>{
  const [time, setTime]=useState(new Date().toLocaleTimeString());
    useEffect(()=>{
        const interval=setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return()=>{
            clearInterval(interval);
        }
    }, []);
    return(
        <div>
            <h1>Current Time</h1>
            <h2 style={{color:color,background:'#000',width:'150px',padding:'10px',borderRadius:'6px'}}>
                {time}
            </h2>
        </div>
    )
}

export default Clock;