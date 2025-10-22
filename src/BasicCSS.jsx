import { useState } from "react";

function BasicCSS() {
    const [boxStyle, SetboxStyle] = useState(
        {
            border: '2px solid black',
            width: '200px',
            boxShadow: '1px 2px 3px 0px #cccccc3b',
            padding: '20px'
        }
    )
    const updateTheme=(bgColor, textColor)=>{
        SetboxStyle({
            ...boxStyle,
            backgroundColor: bgColor,
            color: textColor
        })
    }


    //
    //  const boxStyle = {
    //     width: '150px',
    //     height: '150px',
    //     backgroundColor: 'lightblue',
    //     border: '2px solid black',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: '20px',
    //     fontWeight: 'bold'
            // border: '2px solid black',
            // width: '200px',
            // boxShadow: '1px 2px 3px 0px #cccccc3b',
            // padding: '20px'
    //  };
    return (
        <>
        <h1 style={{color:'red'}}>Inline Style in RJS</h1>
        <button onClick={()=>updateTheme('gray', 'green')}>Gray Theme</button>
        <button onClick={()=>updateTheme('white','black')}>Default Theme</button>
        <div style={{display:'flex', gap:'10px', flexWrap:'wrap', justifyContent:'center', alignItems:'center', marginTop:'20px', padding:'10px', border:'2px solid gray', borderRadius:'10px', width:'90%', marginLeft:'auto', marginRight:'auto', boxShadow:'2px 3px 5px 0px #0000001a'   }}>
            <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://static.vecteezy.com/system/resources/previews/015/271/968/non_2x/business-man-flat-icon-design-human-resource-and-businessman-icon-concept-man-icon-in-trendy-flat-style-symbol-for-your-web-site-design-logo-app-vector.jpg" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://static.vecteezy.com/system/resources/previews/015/271/968/non_2x/business-man-flat-icon-design-human-resource-and-businessman-icon-concept-man-icon-in-trendy-flat-style-symbol-for-your-web-site-design-logo-app-vector.jpg" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://static.vecteezy.com/system/resources/previews/015/271/968/non_2x/business-man-flat-icon-design-human-resource-and-businessman-icon-concept-man-icon-in-trendy-flat-style-symbol-for-your-web-site-design-logo-app-vector.jpg" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://static.vecteezy.com/system/resources/previews/015/271/968/non_2x/business-man-flat-icon-design-human-resource-and-businessman-icon-concept-man-icon-in-trendy-flat-style-symbol-for-your-web-site-design-logo-app-vector.jpg" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://static.vecteezy.com/system/resources/previews/015/271/968/non_2x/business-man-flat-icon-design-human-resource-and-businessman-icon-concept-man-icon-in-trendy-flat-style-symbol-for-your-web-site-design-logo-app-vector.jpg" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        

        </div>

        <div style={{display:'flex', gap:'10px', flexWrap:'wrap', justifyContent:'center', alignItems:'center', marginTop:'20px', padding:'10px', border:'2px solid gray', borderRadius:'10px', width:'90%', marginLeft:'auto', marginRight:'auto', boxShadow:'2px 3px 5px 0px #0000001a'   }}>
            <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        

        </div>

        <div style={{display:'flex', gap:'10px', flexWrap:'wrap', justifyContent:'center', alignItems:'center', marginTop:'20px', padding:'10px', border:'2px solid gray', borderRadius:'10px', width:'90%', marginLeft:'auto', marginRight:'auto', boxShadow:'2px 3px 5px 0px #0000001a'   }}>
            <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        

        </div>

        <div style={{display:'flex', gap:'10px', flexWrap:'wrap', justifyContent:'center', alignItems:'center', marginTop:'20px', padding:'10px', border:'2px solid gray', borderRadius:'10px', width:'90%', marginLeft:'auto', marginRight:'auto', boxShadow:'2px 3px 5px 0px #0000001a'   }}>
            <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        

        </div>


        <div style={{display:'flex', gap:'10px', flexWrap:'wrap', justifyContent:'center', alignItems:'center', marginTop:'20px', padding:'10px', border:'2px solid gray', borderRadius:'10px', width:'90%', marginLeft:'auto', marginRight:'auto', boxShadow:'2px 3px 5px 0px #0000001a'   }}>
            <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        

        </div>

        <div style={{display:'flex', gap:'10px', flexWrap:'wrap', justifyContent:'center', alignItems:'center', marginTop:'20px', padding:'10px', border:'2px solid gray', borderRadius:'10px', width:'90%', marginLeft:'auto', marginRight:'auto', boxShadow:'2px 3px 5px 0px #0000001a'   }}>
            <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        

        </div>

        <div style={{display:'flex', gap:'10px', flexWrap:'wrap', justifyContent:'center', alignItems:'center', marginTop:'20px', padding:'10px', border:'2px solid gray', borderRadius:'10px', width:'90%', marginLeft:'auto', marginRight:'auto', boxShadow:'2px 3px 5px 0px #0000001a'   }}>
            <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        

        </div>

        <div style={{display:'flex', gap:'10px', flexWrap:'wrap', justifyContent:'center', alignItems:'center', marginTop:'20px', padding:'10px', border:'2px solid gray', borderRadius:'10px', width:'90%', marginLeft:'auto', marginRight:'auto', boxShadow:'2px 3px 5px 0px #0000001a'   }}>
            <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        <div style={
           boxStyle

        }>
            <img style={{width:'200px'}} src="https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826" alt="" />
            <div style={{padding:'5px'}}>
                <h4>Avinash</h4>
                <p>React JS Developer</p>
            </div>
        </div>

        

        </div>
        
        </>
    )
}
export default BasicCSS;
       
