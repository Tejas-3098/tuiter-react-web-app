const WhoToFollowListItem = (posts) =>
{
    return (`
 <div class="wd-line">
                           <img class="wd-images" src=${posts.image}/>
                           <h6 class="wd-title"> ${posts.title}</h6>
                           <br/>
                           <h4 class="container">${posts.content} </h4>
                           <h6 class="wd-title">${posts.tuits}</h6>
                       </div>`);
}
export default WhoToFollowListItem;
