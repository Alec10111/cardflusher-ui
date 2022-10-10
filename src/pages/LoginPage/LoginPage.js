import React, { useState } from "react";
import PocketBase from "pocketbase";
import "./LoginPage.css";

const client = new PocketBase("http://127.0.0.1:8090");

function LoginScreen(props) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    async function login() {
        const userToken = await client.users.authViaEmail(username, password);
        props.setToken(userToken);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await login({
            username,
            password,
        });
        setToken(token);
    };

    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input
                        type="text"
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </label>
                <label>
                    <p>Password</p>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default LoginScreen;
