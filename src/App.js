import React, { useState } from "react";
import PocketBase from "pocketbase";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import LoginScreen from "./pages/LoginPage/LoginPage";
import useToken from "./utils/useToken";

function App() {
    const { token, setToken } = useToken();
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
