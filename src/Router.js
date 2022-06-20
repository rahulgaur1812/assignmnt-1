import React from "react";
import Footer from "./components/organisms/Footer/Footer";
import Header from "./components/organisms/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/templates/Home";
import Counter from "./components/templates/Counter";
import Restapi from "./components/templates/Restapi";
import ModalComponent from "./components/templates/Modal";
import Weather from "./components/templates/Weather";

const Router = () =>{
    return(
        <React.Fragment>
            <Header/>
            <Routes>
                <Route path="/class" element={<Home/>}/>
                <Route path="/counter" element={<Counter/>}/>
                <Route path="/api" element={<Restapi/>}/>
                <Route path="/modal" element={<ModalComponent/>}/>
                <Route path="/weather" element={<Weather/>}/>
            </Routes>
            <Footer/>
        </React.Fragment>
    )

}

export default Router;