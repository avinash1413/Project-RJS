import { useFormStatus } from "react-dom";

function UseFormStatus() {

    const handleSubmit=async ()=>{
        await new Promise(res=>setTimeout(res, 2000));
        console.log("submit");
    }

    function CustomerForm(){
        const {pending} = useFormStatus();
        console.log(pending);

        return(
            <div>
                <input type="text" placeholder="Enter your Name" />
                <br /><br />
                <input type="text" placeholder="Enter your password"/>
                <br /><br />
                <button disabled={pending}>{pending?'Submitting...':'Submit'}</button>
            </div>
        )
    }

    return(
        <div>
            <h1>UseFormState Hook in React JS 19</h1>
            <form action={handleSubmit}>
            <CustomerForm />
            </form>
        </div>
    );

}
export default UseFormStatus