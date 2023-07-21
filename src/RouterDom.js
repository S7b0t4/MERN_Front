import React from 'react';
import { Routes, Route, Link } from "react-router-dom"
import App from "./App";
import Test from "./comp/Test/Test"

const RouterDom = () => {
    return (
        <div>
            <Routes>
                <Route path="/makeTest" element={<App />}/>
                <Route path="/test/:id" element={<Test />}/>
            </Routes>
        </div>
    );
};

export default RouterDom;