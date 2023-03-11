/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import NavigationSidebar from "../navigation-sidebar/index";
import PostList from "../PostList/PostList";
import PostSummaryList from "../post-summary-list/index";

const HomeScreen = () => {
    return(
        <>
            <div className="row mt-2">
                
                <div className=" col-xl-6 col-lg-6 col-sm-10 col-md-10 wd-post">
                    <PostList/>
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <PostSummaryList/>
                </div>

            </div>
        </>
    )
}

export default HomeScreen;
