// // import Header from "./Header"
// // import { createElement } from "react"
// import ToDo from "./ToDo"
import  { useState } from "react" 
// import User1 from "./User1"
// import Counter from "./Counter";
// import Student from "./Student"
// import Wrapper from "./Wrapper"
// import CheckBox from "./CheckBox"
// import RdoDrpdwn from "./RdoDrpdwn"
// import ArrayLoop from "./ArrayLoop"
// import Clock from "./Clock";
// import NestedLooping from "./NestedLooping"
// import UseEffect from "./UseEffect";
import ReactLifeCycle from "./ReactLifeCycle";
// import Counter from "./ReactLifeCycle";


function App() {
  const [count, setCount]=useState(0);
  // const [data, setData]=useState({});
  const [display, setDisplay]=useState(true);
  
  return(
    <div>
      <h1>React Life Cycle Methods</h1>
      <button onClick={()=>setDisplay(!display)}>
        {display ? "Unmount Counter Component" : "Mount Counter Component"}
      </button>
      {display && <ReactLifeCycle count={count} data={{title: "Sample Data"}} />}
      <button onClick={()=>setCount(count + 1)}>Update Count</button>
    </div>
  )



  // return (
  //   <div>
  //     <UseEffect />
  //   </div>
  // )

  // }
  // return(
  //   <div>
  //     <h1>Nested Looping Example</h1>
  //     <NestedLooping />
  //   </div>
  // )
  // const [color, setColor]=useState('yellow')
  // return(
  //   <div>
  //     <h1>Clock Component</h1>
  //     <select onChange={(e)=>setColor(e.target.value)} value={color}>
  //       <option value={"red"}>Red</option>
  //       <option value={"green"}>Green</option>
  //       <option value={"blue"}>Blue</option>
  //       <option value={"yellow"}>Yellow</option>
  //     </select>
  //     <Clock color={color} />
  //     <Clock color={color} />
  //     <button onClick={()=>setColor('red')}>Red</button>
  //     <button onClick={()=>setColor('green')}>Green</button>
  //     <button onClick={()=>setColor('blue')}>Blue</button>
  //     <button onClick={()=>setColor('yellow')}>Yellow</button>
  //   </div>
  // )
  // return(
  //   <div>
  //     <h1>Array Looping Example</h1>
  //     <ArrayLoop />
  //   </div>
  // )
  
  // return(
  //   <div>
  //     <h1>Radio Button and Dropdown Example</h1>
  //     <RdoDrpdwn />
  //   </div>
  // )
  // return(
  //   <div>
  //     <h1>Checkbox Component</h1>
  //     <CheckBox />
  //   </div>
  // )
  // const[name, setName]=useState('');
  // const[password, setPassword]=useState('');
  // const[email, setEmail]=useState('');

  // const nameRef=useRef();
  // const passRef=useRef();
  // const emailRef=useRef();

  // const handleSubmit=()=>{
  //   console.log("Name: ", nameRef.current.value);
  //   console.log("Password: ", passRef.current.value);
  //   console.log("Email: ", emailRef.current.value);
  // }
  // return (
  //   <div>
  //     <h1>Controller Compponent</h1>
  //     <form action="" method="get">
  //       <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter Name" />
  //       <br />
  //       <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Enter password"/>
  //       <br />
  //       <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter Email"/>
  //       <br />
  //       <button type="submit">Submit</button>
  //       <button onClick={()=>{setName('');setEmail('');setPassword('')}}>Clear</button>
  //       <h3>{name}</h3>
  //       <h3>{password}</h3>
  //       <h3>{email}</h3>
  //     </form>
  //   </div>
    // <form>
    //   <h1>Uncontrolled Component in React JS</h1>
    //   <input type="text" placeholder="Enter Name" ref={nameRef} />
    //   <br />
    //   <input type="password" placeholder="Enter Password" ref={passRef} />
    //   <br />
    //   <input type="email" placeholder="Enter Email" ref={emailRef} />
    //   <br />
    //   <button type="button" onClick={handleSubmit}>Submit</button>
    //
      // </form>
  // )
  // const [val, setVal]=useState("");
  // return(
  //   <div>
  //     <h1>Get Input Filed Value</h1>  
  //     <input 
  //       type="text" 
  //       value={val} 
  //       onChange={(e)=>setVal(e.target.value)} 
  //       placeholder="Enter Something"
  //     />
  //     <h2>Input Value: {val}</h2>
  //     <button onClick={()=>setVal("")}>Clear Value</button>
  //   </div>
  // )
  // return(
  //   <div>
  //     <h1>Children Prop in React JS</h1>
  //     <Wrapper color="red">
  //       <h2>This is inside the Wrapper Component</h2>
  //       <p>This paragraph is also inside the Wrapper Component</p>
  //     </Wrapper>

  //     <Wrapper color="orange">
  //       <h2>This is another Wrapper Component 2</h2>
  //       <p>This paragraph is also inside the second Wrapper Component</p>
  //     </Wrapper>

  //     <Wrapper>
  //       <h2>This is Wrapper Component with Default Color</h2>
  //       <p>This paragraph is also inside the Wrapper Component with Default Color</p>
  //     </Wrapper>
  //   </div>
  // )

  // let name = ["Avinash", "Ramesh", "Suresh"];
  // let age = [24, 25, 23];
  // let rollNo = [101, 102, 103];

  // return (
  //   <div>
  //     <h1>Student Information</h1>
  //     {
  //       name.map((studentName, index) => (
  //         <Student
  //           key={index}
  //           student={{ name: studentName, age: age[index], rollNo: rollNo[index] }}
  //         />
  //       ))
  //     }
  //   </div>
  // );
  


//     let CollegeName=['ABC College', 'XYZ College', 'PQR College'];
//     let CollegeLocation=['Mumbai', 'Pune', 'Nagpur'];
//     let EstablishedYear=[1990, 1985, 2000];
// return (
//     <div>
//       <h1>College Information</h1>
//       {
//         CollegeName.map((college, index) => (
//           <div key={index}>
//             <h2>{college}</h2>
//             <p>Location: {CollegeLocation[index]}</p>
//             <p>Established Year: {EstablishedYear[index]}</p>
//           </div>
//         ))
//       }
//     </div>
//   )

  //   <div>

  // let userName="Avinash";
  // let age=24;
  // let email="avi@test.com"
  // let userObj={
  //   name: "Avinash",
  //   age: 24,
  //   email: "avinash@test.com"
  // }
  // let userObj2={
  //   name: "Avi",
  //   age: 29,
  //   email: "avi@test.com"
  // }
  // return(

    // <div>
  
    //   <h1>Props in React JS</h1>
    //   {/* <User1  name="Avinash" age={24}/> */}
    //   {/* <User1 name={userName} age={age} email={email}/> */}
    //   <User1  user={userObj}/>
    //   <User1  user={userObj2}/>
    // </div>
  // )
  // const [count, setCount]=useState(0);
  
  // return(
  //   <div>
  //     <h1>Counter : {count}</h1>
  //     <button onClick={() => setCount(count + 1)}>Counter</button>
  //     {
  //       count==0?<h1>Condition 0 </h1>
  //       :count==1?<h1>Condition 1 </h1>
  //       :count==2?<h1>Condition 2 </h1>
  //       :count==3?<h1>Condition 3 </h1>
  //       :count==4?<h1>Condition 4 </h1>
  //       :<h1>Other Condition</h1>

  //     }
  //   </div>
  // )

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