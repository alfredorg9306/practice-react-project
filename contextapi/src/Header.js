import { useContext } from "react";
import { UserContext } from "./UserContext";

function Header(){
    const {user} = useContext(UserContext);

    return(
        <div>
            <p>Hola! {user.name}</p>
        </div>
    );
}

export default Header;