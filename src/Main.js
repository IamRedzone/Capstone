import React, {useContext} from "react";
import Hero from "./Hero";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from "./About";
import { ScrollContext } from './Scrollcontext';

import './styles.css';

export default function Main(){
    const { sectionRefs } = useContext(ScrollContext);
    return (
        <main className="main" >
            <div ref={sectionRefs.section1}>
            <Hero/>
            </div>
            <div ref={sectionRefs.section3}><Highlights/></div>
            <div><Testimonials/></div>
            <div ref={sectionRefs.section2}><About /></div>
        </main>
    )
}