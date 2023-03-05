import React from "react";
import homeArray from './home.json';
import HomeComponent
  from "./HomeComponent";

const Homepage = () => {
    return (
        <>
            <ul className="list-group ">
                {homeArray.map(home => {
                    return (

                        <div key={home.id}>
                            <HomeComponent home={home} />
                        </div>
                    );
                })
                }
            </ul>
        </>
    );
};
export default Homepage;