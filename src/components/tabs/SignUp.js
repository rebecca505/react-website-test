import React from "react";
import '../../App.css'
import SignUpMain from "../../tab-components/SignUpMain";
import Footer from "../Footer";

export default function SignUp() {
    return (
        <>
            <h1 className='sign-up'>SIGN UP</h1>
            <SignUpMain/>
            <Footer />
        </>
    )
}