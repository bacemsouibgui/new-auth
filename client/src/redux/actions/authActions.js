import { LOGIN_USER, REGISTER_USER, LOGOUT_USER } from "../constants/ActionTypes";
import axios from "axios";

// Register user
export const registerUser=(formData)=>async(dispatch)=>{

    try {
 
    const res= await axios.post("/api/auth/register", formData)
    dispatch({
        type: REGISTER_USER,
        payload: res.data
    })
    }
    catch(error){
        console.log(error)

    }
}

// Login user

export const loginUser=(formData)=>async(dispatch)=>{
    try{
        const res= await axios.post("/api/auth/login", formData)
        dispatch({
            type: LOGIN_USER,
            payload: res.data
        })
  

    }
    catch(error){
        console.log(error)

    }

    

}
// logout
export const logout=()=>(dispatch)=>{
    dispatch({
        type: LOGOUT_USER,

    })

}