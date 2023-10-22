import React from "react";
import '../../App.css'
import CardsMain from "../../tab-components/CardsMain";
import Footer from "../Footer";

export default function Cards() {
    return (
        <>
            <h1 className='cards'>CARDS
                <h2 className='cards-arrow'> <i class="fas fa-chevron-down"></i> </h2>
            </h1>
            <CardsMain />
            <Footer />
        </>
    )
}