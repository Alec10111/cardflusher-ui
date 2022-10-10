import React, { useState } from "react";
import PocketBase from "pocketbase";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import LoginScreen from "./pages/LoginPage/LoginPage";

function setToken(userToken) {
    sessionStorage.setItem("token", JSON.stringify(userToken));
}

function getToken() {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
}

function App() {
    const token = getToken();

    if (!token) {
        return <LoginScreen setToken={setToken} />;
    }
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/settings" element={<SettingsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
