import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import './styles.css';

export default function Head(){
    return(
        <div className='header' >
            <Header/>
            <Nav/>
        </div>
    )
}