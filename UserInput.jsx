// import { forwardRef } from "react";

// const UserInput=(props, ref)=>{
//     return(
//         <div>
//             <input type="text" ref={ref} />
//         </div>
//     )
// }

// export default forwardRef(UserInput)

// React 19 useage of Forward Ref

const UserInput=(props)=>{
    return(
        <div>
            <input type="text" ref={props.ref} />
        </div>
    )
}
export default UserInput