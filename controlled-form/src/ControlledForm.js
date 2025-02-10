import { useState } from "react"

export default function ControlledForm(){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState({
        value: "",
        isTouched: false,
    });
    const [role, setRole] = useState('Role');

    const isValid = () =>{
        return(
            firstName&&
            lastName &&
            password.value.length >= 8 &&
            role!=="Role"
        );
    };

    return(
        <form>
            <fieldset>
                <legend>Personal Information</legend>

               <div>
                    <label>First name:</label>
                    <input 
                    type="text"
                    value={firstName} 
                    onChange={e=>{setFirstName(e.target.value);}} placeholder="First name"/>
                </div> 
                

                <div>
                    <label>Last name:</label>
                    <input type="text" value={lastName} onChange={e=>{setLastName(e.target.value);}} placeholder="Last name"/>
                </div>

                <div>
                    <label>Email address</label>
                    <input type="email" value={email} onChange={e=>{setEmail(e.target.value);}} placeholder="Email address"/>
                </div>

                <div>
                    <label>Password:</label>
                    <input type="password"
                     placeholder="Password"
                     value={password.value}
                     onChange={e=>{setPassword({...password, value: e.target.value});
                    }}
                     onBlur={e=>{setPassword({...password, isTouched: true})}}
                     />
                </div>
                
                <div>
                    <label>Role</label>
                    <select value={role} onChange={e=>setRole(e.target.value)}>
                        <option value="Role">Role</option>
                        <option value="Admin">Administrador</option>
                        <option value="Usuario">Usuario</option>
                    </select>
                </div>

                <button type="submit" disabled={!isValid()} >Create Account</button>

            </fieldset>
        </form>
    )
}