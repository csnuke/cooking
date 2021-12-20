import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {Home} from "./Home";
import {AuthPage} from "./AuthPage";
import 'antd/dist/antd.css'
import styled from "styled-components";
import axios from "axios";

const App = () => {
    const userAuthData = localStorage.getItem('userAuthData');

    console.log(userAuthData)
    return userAuthData ? <Home/> : <Home/>
}

export default App;


const HomeContainer = styled(Home)`
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
`;