import logo from './logo.svg';
import './App.css';
import {  Route, Redirect, Routes } from "react-router-dom"
import Signup from './Signup';
import Signin from './Signin';
import Home from './Home';

function App() {
    return (
        <div className="App">
            <Routes >
                <Route path="/" exact  element={<Signup/>} />
                <Route path="/login" exact  element={<Signin/>} />
                <Route path="/home" exact  element={<Home/>} />
            </Routes>
        </div>
    );
}

export default App;
