import React from "react";
import '../../App.css'
import InstructMain from "../../tab-components/InstructMain";
import Footer from "../Footer";

export default function Instructions() {
    return (
        <>
            <h1 className='instructions'>INSTRUCTIONS</h1>
            <InstructMain/>
            <Footer />
        </>
    )
}