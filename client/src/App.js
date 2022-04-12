import React, {useState} from 'react';
import './styles/App.css'
import MilkSHPForm from "./MilkSHPForm";

function App() {

  return (
    <div className="App">
        <div className="mainMenu">
            <div>
                <MilkSHPForm></MilkSHPForm>
            </div>
        </div>
    </div>
  );
}

export default App;
