import React from "react";
import '../../App.css'
import JournalMain from "../../tab-components/JournalMain";
import Footer from "../Footer";

export default function Journal() {
    return (
        <>
            <h1 className='journal'>JOURNAL</h1>
            <JournalMain/>
            <Footer />
        </>
    )
}