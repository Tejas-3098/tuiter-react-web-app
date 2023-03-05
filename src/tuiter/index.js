import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar/index.js";
import WhoToFollowListItem
  from "./WhoToFollowList/index.js";
import ExploreComponent
  from "./explore/index.js";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";

function Tuiter() {
 return (
    <div className="row mt-2">
      <div className="col-2 col-md-2 col-lg-1 col-xl-2">
        <NavigationSidebar active="explore"/>
      </div>
      <div className="col-10 col-md-10 col-lg-7 col-xl-6"
           style={{"position": "relative"}}>
        <Routes>
                 <Route path="explore" element={<ExploreComponent/>}/>
                 <Route path="home" element={<HomeComponent/>}/>

               </Routes>
      </div>
      <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
        <WhoToFollowListItem/>
      </div>
    </div>

 );
};
export default Tuiter