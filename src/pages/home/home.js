import "./home.css";
import React from "react";

import HeaderComponent from "../../components/header/HeaderComponent";
import HomeComponent from "../../components/home/HomeComponent";

function Home() {
    return (
        <div className="content-home"> 
            <HeaderComponent />
            <HomeComponent />
        </div>
    );
}

export default Home;
