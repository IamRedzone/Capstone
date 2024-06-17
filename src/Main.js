import React from "react";
import Hero from "./Hero";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from "./About";
import './styles.css';

export default function Main(){
    return (
        <div className="main" >
            <Hero/>
            <Highlights/>
            <Testimonials/>
            <About/>
        </div>
    )
}