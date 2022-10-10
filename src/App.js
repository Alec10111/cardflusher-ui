import React from "react";
import PocketBase from "pocketbase";
import LoginPage from "./pages/LoginPage/LoginPage";
import { NextUIProvider } from '@nextui-org/react';

function App() {
  return (
    <NextUIProvider>
      <LoginPage/>
    </NextUIProvider>
  );
}

export default App;
