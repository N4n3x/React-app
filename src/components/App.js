import React from 'react';
import 'typeface-roboto';
import logo from '../logo.svg';
import '../style/App.css';
import Todo from "./TodoHook";
// import MainBar from "./MainBar";
// import MainDrawer from "./MainDrawer";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/*<MainBar></MainBar>*/}
                {/*<MainDrawer></MainDrawer>*/}
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
            <div className={"App-body"}>
                <Todo/>
            </div>
        </div>
    );
}

export default App;
