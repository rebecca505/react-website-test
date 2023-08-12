import React from "react";
import '../../App.css'
import AboutMeMain from "../../tab-components/AboutMeMain";
import Footer from "../Footer";

export default function AboutMe() {
    return (
        <>
            <h1 className='about-me'>ABOUT ME</h1>
            <AboutMeMain />
            <Footer />
        </>
    )
}