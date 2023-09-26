import React, { useState } from 'react'
import { Link } from 'react-router-dom';
function Profile() {
    const [loginState, setLoginState] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastNmae, setLastName] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailL, setEmailL] = useState('');
    const [passwordl, setPasswordl] = useState('');
    const handleOnSubmit=(e)=>{
    
        console.log(firstName,lastNmae,mobile,password,email,confirmPassword);
    }
    console.log(loginState)
    return (
        <div>

            <Link onClick={() => setLoginState(true)}>SignUp</Link>
            <Link onClick={() => setLoginState(false)}>LogIn</Link>
            <div>{loginState === true ?
                <div>SignUp
                    <form onClick={handleOnSubmit}>
                        <input
                            placeholder="First Name"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                            placeholder="Last Name"
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <input
                            placeholder="Mobile Number"
                            onChange={(e) => setMobile(e.target.value)}
                        />
                        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        <input
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            placeholder="confirm Password"
                            onChange={(e) => setConfirmPassword(e.target.value)}

                        />
                        <button type="submit">SignUp</button>
                    </form>
                </div>
                :
                <div>
                    <form>
                        <input placeholder="Email" onChange={(e) => setEmailL(e.target.value)} />
                        <input
                            placeholder="Password"
                            onChange={(e) => setPasswordl(e.target.value)}
                        />
                        <biutton>LogIn</biutton>
                    </form>
                </div>}</div>
        </div>
    )
}

export default Profile