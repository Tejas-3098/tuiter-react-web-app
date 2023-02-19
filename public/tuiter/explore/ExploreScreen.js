import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "../ExploreComponent/index.js";
import WhoToFollow from "../WhoToFollow/index.js";

(function ($) {
    $('#wd-explore').append(`
    <div class="row mt-2">

    <div class="col-2 col-md-2 col-lg-1 col-xl-2">
    ${NavigationSidebar()} 
    </div>

    <div class="col-10 col-md-10 col-lg-7 col-xl-6">

    <div class="wd-search">
                    <div class="row">
                        <div class="col-11"><input type="text" placeholder=" &#128269; Search Tuiter"
                                                   class="wd-rounded-corners-all-around"/></div>
                        <div class="col-1"><a href="explore-settings.html" class="wd-settings"><i class="fa fa-cog"
                                                                                                  aria-hidden="true"></i></a>
                        </div>
                    </div>

                </div>

     <div class="wd-nav-tabs-line">
                        <ul class="nav nav-tabs">
                            <table>
                                <thead>
                                <tr>
                                    <th>
                                        <li class="nav-item"><a href="foryou.html" class="nav-link active"> For
                                            You </a>
                                        </li>
                                    </th>
                                    <th>
                                        <li class="nav-item"><a href="trending.html" class="nav-link">
                                            Trending </a></li>
                                    </th>
                                    <th>
                                        <li class="nav-item"><a href="covid19.html" class="nav-link">
                                            COVID-19 </a></li>
                                    </th>
                                    <th>
                                        <li class="nav-item"><a href="news.html" class="nav-link"> News </a></li>
                                    </th>
                                    <th>
                                        <li class="nav-item"><a href="sports.html" class="nav-link"> Sports </a>
                                        </li>
                                    </th>
                                    <th>
                                        <li class="nav-item d-none d-md-block"><a href="entertainment.html"
                                                                                  class="nav-link">
                                            Entertainment </a>
                                        </li>
                                    </th>

                                </tr>
                                </thead>
                            </table>
                        </ul>
                    </div>

    <div class="wd-section-border">
                            <div class="wd-top-image">

                                <image src="../../tuiter/explore/starship.jpeg" class="wd-top-image"></image>
                                <h3 class="wd-image-text ">SpaceX's Starship</h3>

                            </div>


    ${ExploreComponent()}
    </div>
    </div>

    <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 wd-ps-col3">
<table class="wd-right-section">

                <th>
                    <h5 class="container">
                        Who to follow
                    </h5>
                </th>

                <th>

                </th>
                </table>
    ${WhoToFollow()}
    </div>

    <div class ="mt-4"></div>

</div> 
`);
})($);