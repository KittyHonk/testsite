import React from 'react';
import AppRouter from "./component/AppRouter";
import {BrowserRouter, Route, Router} from "react-router-dom";
import NavBar from "./component/NavBar";

function App() {
  return (
      <BrowserRouter>
          <NavBar/>
          <AppRouter/>
      </BrowserRouter>
  );
}

export default App;
