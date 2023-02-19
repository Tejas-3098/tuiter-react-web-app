import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "../ExploreComponent/index.js";
import HomeScreen from "./index.js";


(function ($) {
    $('#wd-home').append(` <div class="row mt-2">
                                             <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                                             ${NavigationSidebar()}
                                             </div>
                                             <div class="col-10 col-md-10 col-lg-7 col-xl-6">
                                                 ${HomeScreen()}
                                             </div>
                                             <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 wd-ps-col3">
                                                 <div class="wd-right-section">
                                                     ${ExploreComponent()}
                                                     </div>
                                             </div>
                                         </div>
                                     `);
})($);