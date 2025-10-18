// // import Header from "./Header"
// // import { createElement } from "react"
// import ToDo from "./ToDo"
import  { useState } from "react"
// import User from "./User"
// import Counter from "./Counter";

function App(){
  const [count, setCount]=useState(0);
  
  return(
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Counter</button>
      {
        count==0?<h1>Condition 0 </h1>
        :count==1?<h1>Condition 1 </h1>
        :count==2?<h1>Condition 2 </h1>
        :count==3?<h1>Condition 3 </h1>
        :count==4?<h1>Condition 4 </h1>
        :<h1>Other Condition</h1>

      }
    </div>
  )

  // const [display, setDisplay]=useState(true);
  // return(
  //   <div>
  //     <h1>Toggle in React JS</h1>
  //     <button onClick={()=>setDisplay(!display)}>Toggle</button>

  //     {display ? <User /> : <h1>Avinash</h1>}
  //   </div>
  // )

//   const name="Avinash";
//   const userObj ={
//     name: "Avinash",
//     email: "abc@test.com",
//     age: "24"

//   }
//   const userArray=['Abc','def','ghi']
//   let x = 15;
//   let y = 20;
//   let path="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg"
//   function fruit() {
//     return "Apple";
//   }
//   function sum(a,b){
//     return a+b;
//   }
//   function operations(a,b, op){
//     if(op == "+"){
//       return a+b;
//     }
//     if(op == "-"){
//       return a-b;
//     }
//     else{
//       return a*b;
//     }
//   }
//   return (
//   // const userName="Avinash";
//   // let x = 10;
//   // let y = 30;
//   // return(
//   //   <div>
//   //     <Header/>
//   //   <h1>Hello {userName}</h1>
//   //   <h2>{10+20+2}</h2>
//   //   <h3>{x*y}</h3>
//   //   <button onClick={()=>alert("adding button in react. JSX topic")}></button>

//   //   </div>
//   // )

//   // return createElement("div", {id:"rootDiv"}, "hello div")

//   // 
//   // <div>
//   //   <ToDo />
//   // </div>
//   <div>
//     <h1>JSX Curly Braces</h1>
//     <h2>{name?name:"user not found"}</h2>
//     <h1>{fruit()}</h1>
//     <h2>{sum(x,y)}</h2>
//     <h3>{operations(20,30,"+")}</h3>
//     <h2>{userObj.name}</h2>
//     <h3>{userObj.age}</h3>
//     <h4>{userArray[0]}</h4>
//     <input type="text" value={name} id={name}/>
//     <br />
//     <img 
//     src={path}
//     />
//   </div>
//   )
// }

// export default App
// function App() {
//   function callFun() {
//     alert("function called")
//   }

//   // const fruit=()=>{
//   //   alert("Mango")
//   // }
//   const fruit=(name)=>{
//     alert(name)
//   }

//   return (
//     <div>
//       <h1>Event And Function Call</h1>
//       <button onClick={callFun}>Click Me</button>
//       {/* <button onClick={fruit}>Mango</button> */}
//       <button onClick={()=>fruit("Apple")}>Apple</button>
//       <button onClick={()=>fruit("Banana")}>Banana   </button>

//     </div>
//   )
// }

// function App() {
//   const [fruit, setFruit] = useState("Mango");
//   const handleFruit=()=>{
//     setFruit("Apple")
//   }

//   return (
//     <div>
//       <h1>Use State Hook</h1>
//       <h2>Fruit Name: {fruit}</h2>
//       <button onClick={handleFruit}>Change Fruit</button>
//       <Counter />

//     </div>
//   )

}

export default App