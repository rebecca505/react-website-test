import React from "react";
import '../../App.css'
import ActivityForm from "../../tab-components/ActivityForm";
import Footer from "../Footer";

export default function Form() {
    return (
        <>
            <h1 className='form'>ACTIVITY FORM</h1>
            <ActivityForm />
            <Footer />
        </>
    )
}