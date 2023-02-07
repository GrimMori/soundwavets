import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { JoinBody } from "./JoinBody";

//to-do this function has to return 3 elements
export function Join(){
    return(
        <>
            <Header />
            <JoinBody />
            <Footer />
        </>
    )
}