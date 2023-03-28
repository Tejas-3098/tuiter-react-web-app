/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import NavigationSidebar from "../navigation-sidebar/index";
//import PostList from "../PostList/PostList";
import PostSummaryList from "../post-summary-list/index";

import TuitList from "../tuitList";
import WhatsHappening from "./whats-happening";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import tuits from "../reducers/tuits";
import whoReducer from "../reducers/who-reducer";
import profile from "../reducers/profile";

const reducer = combineReducers({tuits: tuits, who: whoReducer, profile})
const store = createStore(reducer);

const HomeScreen = () => {
    return(
        <Provider store={store}>
            <>
                <div className="row mt-2">
                    <div className="col-sm-2 col-md-2 col-lg-1 col-xl-2">
                        <NavigationSidebar activeContent="Home"/>
                    </div>
                    <div className=" col-xl-6 col-lg-6 col-sm-10 col-md-10 wd-post">
                        <WhatsHappening/>
                        <TuitList/>
                    </div>
                    <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                        <PostSummaryList title = "What's happening"/>
                    </div>

                </div>
            </>
        </Provider>
    )
}

export default HomeScreen;