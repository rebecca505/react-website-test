import React from "react";
import '../../App.css'
import CardsMain from "../../tab-components/CardsMain";
import Footer from "../Footer";

export default function Cards() {
    return (
        <>
            <h1 className='cards'>CARDS</h1>
            <CardsMain />
            <Footer />
        </>
    )
}