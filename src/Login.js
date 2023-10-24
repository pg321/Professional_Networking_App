import React, { useState } from 'react';
import "./Login.css";
import { 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    updateProfile,
    signInWithEmailAndPassword

} from "firebase/auth";
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

function Login() {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[name, setName] = useState("");
    const[profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const loginToApp = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(
            auth,
            email,
            password
        )
        .then((authUser) => {
            const user = authUser.user;
            updateProfile(user, {
                displayName: user.name,
                photoUrl: profilePic,
            });
            dispatch(
                login({
                    email: user.email,
                    uid: user.uid,
                    displayName: name,
                    photoURL: profilePic, 
                })
            );
        })
        .catch((error) => {
            alert(error.messege);
        });
    };
    
    const register = (e) => {
        e.preventDefault();
        const userCredential=createUserWithEmailAndPassword(
            auth,
            email,
            password
        )
        .then((authUser) => {
            console.log(authUser);
            const user = authUser.user;
            updateProfile(user, {
                displayName: user.name,
                photoUrl: profilePic,
            });
            dispatch(
                login({
                    email: user.email,
                    uid: user.uid,
                    displayName: name,
                    photoURL: profilePic, 
                })
            );
        })
        .catch((error) => {
            alert(error.messege);
        });
    };

    

  return (
    <div className="login">
        <img
        src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011-2019.png"
        alt="image"
        />

        <form>
            <input 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name(required if registering)" 
            type="text" 
            />

            <input
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
            placeholder="Profile pic Url(Optional)" 
            type="text" 
            />

            <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email" 
            type="email" />

            <input
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password" 
            type="password" 
            />

            <button type="submit" onClick={loginToApp}>Sign In</button>
        </form>
        
        <p>
            Not a member?{" "}
            <span className="login__register" onClick={register}>Register Now</span>
        </p>
    </div>
  )
}

export default Login;