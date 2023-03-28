import React from "react";
import TuitsListItem from "../tuitList/TuitListItem";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitsListItem/>
        </>
    );
};
export default HomeComponent;

