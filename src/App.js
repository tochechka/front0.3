import React from "react"
import './App.css';
import {HashRouter} from "react-router-dom";
import AppRouter from "./route/AppRouter";

function App() {

    return (
        <HashRouter>
            <div>
                <AppRouter/>
            </div>
        </HashRouter>
    );
}

export default App;
