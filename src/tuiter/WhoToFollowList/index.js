import React from "react";
import whoArray from './who.json';
import WhoToFollowListItem
  from "./WhoToFollowListItem";

const WhoToFollowList = () => {
    return (
        <>
            <ul className="list-group ">
                <a href="/#" className="list-group-item wd-list-group "><strong>Who to follow</strong></a>
                {whoArray.map(who => {
                    return (

                        <div key={who.id}>
                            <WhoToFollowListItem who={who} />
                        </div>
                    );
                })
                }
            </ul>
        </>
    );
};
export default WhoToFollowList;
