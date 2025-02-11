import { createContext, useState } from "react";

export const UserContext = createContext(undefined);
function UserProvider({children}){
    const [user] = useState({
        name: "Renan Alfredo Rosales Gutierrez",
        address: "Mined 2c al norte",
        email: "renanrg9306@gmail.com"
    })
    return(
        <UserContext.Provider value={{user}}>{children}</UserContext.Provider>
    ); 
    
};

export default UserProvider;
//export const useUser = ()=> useContext(UserContext);