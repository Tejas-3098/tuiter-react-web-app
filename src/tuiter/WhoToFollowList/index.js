import React from "react";
import {useSelector} from "react-redux";
import WhoToFollowListItem
  from "./WhoToFollowListItem";

const WhoToFollowList = () => {
    const whoArray = useSelector(
        (state) => state.who);
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
