import React from 'react';
import './styles/App.css'
import AppRouter from "./component/AppRouter";
import {authRoutes} from "./routes";
import {BrowserRouter, Route, Router} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
  );
}

export default App;
