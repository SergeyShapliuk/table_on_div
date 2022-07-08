import React from 'react';
import './App.css';
import dataJson from "./data/data.json"
import Main from "./components/routes/Main";
import {Route, Routes} from "react-router-dom";
import Page from "./components/routes/Page";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<Main data={dataJson}/>}/>
                <Route path={"/:id"} element={<Page data={dataJson}/>}/>
            </Routes>
        </div>
    );
}

export default App;
