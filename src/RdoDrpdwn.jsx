import { useState } from "react";

function RdoDrpdwn() {
    const [gender, setGender] = useState('female');
    const [country, setCountry] = useState('Canada');
  return (
    <div>
      <h2>Radio Button and Dropdown Component</h2>
      {/* Add your radio button and dropdown implementation here */}
      <h4>Select Gender</h4>
      <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender"  value={"male"} checked={gender=='male'} id="male" />
      <label htmlFor="male">Male</label>
      <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" value={"female"} checked={gender=='female'} id="female" />
      <label htmlFor="female">Female</label>
      <h2>Select Gender:{gender}</h2>
      <br />
      <h4>Select Country</h4>
        <select onChange={(event)=>setCountry(event.target.value)} defaultValue={"Canada"}>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            <option value="uk">UK</option>
            <option value="australia">Australia</option>
        </select>
        <h2>Selected Country: {country}</h2>

    </div>
  )
}
 
export default RdoDrpdwn;