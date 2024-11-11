import UserContext from "./UserContext";
import { useState } from "react";

export default function UserContextProvider({children}){
    const [user,setUser]=useState({
        username:"vansheep",
        password:"helloworld"
    });

    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}