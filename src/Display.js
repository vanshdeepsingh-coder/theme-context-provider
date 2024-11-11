import { useContext } from "react";
import UserContext from "./context/UserContext";

export default function Display(){
    // const {setUser}=useContext(UserContext)
    // setUser({username:"Vanshdeep",password:"hello"})

    const {user}=useContext(UserContext);

    return (
        <>
        {user.username}
        {user.password}
        </>
    )
}