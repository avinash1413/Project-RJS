import { useState } from "react";


function CheckBox() {
    const [CheckBox, setCheckBox]=useState([])
    const handleCheckbox=(event)=>{
      console.log(event.target.value, event.target.checked);
      if(event.target.checked){
        setCheckBox([...CheckBox, event.target.value])
      } else {
        const filteredCheckbox=CheckBox.filter((e)=>e!==event.target.value)
        setCheckBox(filteredCheckbox);
      }

    }
 return (
   <div>
     <h2>Checkbox Example</h2>
       <input onChange={handleCheckbox} type="checkbox" id="JS" value="JS"/>
       <label htmlFor="JS">JS</label>
       <br />
       
       <input onChange={handleCheckbox} type="checkbox" id="React" value="React"/>
       <label htmlFor="React">React</label>
       <br />
      <input onChange={handleCheckbox} type="checkbox" id="Node" value="Node"/>
        <label htmlFor="Node">Node</label>
       <br />
        <input onChange={handleCheckbox} type="checkbox" id="MongoDB" value="MongoDB"/>
        <label htmlFor="MongoDB">MongoDB</label>
   </div>
 );   
}

export default CheckBox;