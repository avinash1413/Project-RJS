import { useTransition } from "react";

function TransitionHook() {
    // const [pending, setPending]=useState(false);
    const [pending, startTransition]=useTransition();

    const handleButton= ()=>{

        startTransition(async ()=>{
            await new Promise(res=>setTimeout(res,5000));
        })
    //     setPending(true)
    // await new Promise(res=>setTimeout(res,2000));

    
    }

    return(
        <div> 
            <marquee>useTransition Hook in RJS</marquee>
            {
                pending?
                <img style={{width:"100px"}} src="https://c.tenor.com/Gw-jI11oSC8AAAAC/loading-now-loading.gif" alt="" />:null
            }
            <button disabled={pending} onClick={handleButton}>Click</button>
        </div>
    );b
}

export default TransitionHook