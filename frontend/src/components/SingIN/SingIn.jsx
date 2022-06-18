import React, {useState} from "react";
import "./singin.css";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Signin = ({ setsignInUser}) => {

    // const navigate = useNavigate();

    const [ user, setUser] = useState({}
    );

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    const Signin = () => {
        axios.post("https://ideakartclone.herokuapp.com/user/login", user)
        .then(res => {
            alert(res.data.message)
            setsignInUser(res.data.user)
            // navigate.push("/")
        });
    }

    return (
        <div className="signIn">
            <h1>signIn</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={Signin}>signIn</div>
            <div>or</div>
            {/* <div className="gotosignup" onClick={() =>navigate.push("/signUp")}>Register</div> */}
        </div>
    )
}

export default Signin;
