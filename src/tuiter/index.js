import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar/index.js";
import WhoToFollowListItem
  from "./WhoToFollowList/index.js";
import ExploreComponent
  from "./explore/index.js";
import {Routes, Route} from "react-router";
import whoReducer
    from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import {combineReducers, createStore} from "redux";
import tuits from "./reducers/tuits";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import HomeScreen from "./home/HomeScreen.js";
import {Link} from "react-router-dom";
const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuits}});


function Tuiter() {
 return (
     <Provider store={store}>
     <div>
         <Link to={["/a7/tuiter/home"]}>
             Home
         </Link> |
         <Link to="/a7/tuiter/explore">
             Explore
         </Link>  |
         <Link to="/a7/tuiter/profile">
             Profile
         </Link>  |
         <Link to="/a7/tuiter/profile/editProfile">
             Edit Profile
         </Link>
     </div>
     </Provider>
 );
};
export default Tuiter
