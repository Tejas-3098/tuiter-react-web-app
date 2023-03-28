import React from "react";
import {useSelector} from "react-redux";
import TuitListItem from "./TuitListItem";

const selectAllTuits = (state) => state.tuits.tuits;

const TuitList = () => {
    const tweets = useSelector(selectAllTuits);
    return(
        <ul className="list-group">
            {
                tweets.map(tuit =>
                    <TuitListItem tuit={tuit}/>
                )
            }
        </ul>
    )
};

export default TuitList;