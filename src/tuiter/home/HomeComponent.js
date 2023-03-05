import "./index.css";
const HomeComponent = (
 {
   home
 }
) => {
 return(

<div>

    <div class="wd-flex-div">


        <div class="wd-paddingtop">
            <img class="wd-profile-image" src={home.profileImage}></img>
        </div>
        <div class="wd-floattop">
            <h1 class="wd-profilename">{home.userName} </h1>
            <h2 class="wd-handlename"> @{home.handle} - {home.time}<br/></h2>

            <br/>
            <p class="wd-text-content">
                {home.tagline}

            </p>
        </div>
    </div>

    <div class="wd-content-border">

        <img class="wd-content-img" src={home.descriptionImage}></img>

        <br/>
        <h1 class="wd-belowtext-title">
            {home.topic}
        </h1>
        <h2 class="wd-belowtext">
            {home.description}
            </h2>
    </div>

    <div>
        <a class="wd-bottom-div" href="#">&#128495; 50</a>
        <a class="wd-bottom-div" href="#">&#8634; 10</a>
        <a class="wd-heart" href="#">&#9829; 22</a>
        <a class="wd-bottom-div" href="#">&#8613;</a>

    </div>
    <br/>

</div>


 );
};
export default HomeComponent;