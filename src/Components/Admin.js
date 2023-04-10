import React from 'react'
import Header from './Home/Header'
import { useState } from 'react'
import { Navigate } from 'react-router-dom';
import AdminDashboard from './Admin/AdminDashboard';

function Admin() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [goToDashboard, setGoToDashboard] = useState(false);

    if(goToDashboard){
        return <Navigate to="/adminDashboard"/>;
    }

    const login = async() => {
        await fetch("http://localhost:5000/api/auth", {
        method: "POST",
        url: `http://localhost:5000`,
        body: JSON.stringify({username: userName, password:password}),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        }).then((res)=>{
            return res.json()
        }).then((data)=>{
            if(data.token){
                window.localStorage.setItem("token",data.token)
                setGoToDashboard(true);
            }
        })
    }

  return (
    <div className='main'>
        <Header text="Don't try to login"/>
        <form className="admin-login">
            <div className="user-input">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" onChange={(e) => {setUserName(e.target.value)}}/>
            </div>
            <div className="pass-input">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange={(e) => {setPassword(e.target.value)}}/>
            </div>
            <button type="button" onClick={login}>Log In</button>
        </form>
    </div>
  )
}

export default Admin