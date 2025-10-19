function Wrapper({ children, color="blue" }) {
  return (
     <div className="wrapper" style={{color:color, border:"5px solid green", width:"300px", margin:"10px", padding:"10px"}}>
        {children}
     </div>
  )
}

export default Wrapper;