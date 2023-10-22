import React from "react";
import '../../App.css'
import BackgroundMain from "../../tab-components/BackgroundMain";
import Footer from "../Footer";

export default function Background() {
    return (
        <>
            <h1 className='background'>BACKGROUND</h1>
            <BackgroundMain />
            <Footer />
        </>
    )
}