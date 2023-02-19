const NavigationSidebar = () => {
    return `
    <div class="list-group">
    <a href="#" class="list-group-item list-group-item-action  "><i class="fab fa-twitter"></i></a>
     <a href="#" class="list-group-item list-group-item-action">
                                <i class="fa fa-home"></i>
                                Home
                            </a>
      <a href="#" class="list-group-item list-group-item-action active">
                                 <i class="fa fa-hashtag"></i>
                                 Explore
                             </a>
       <a href="#" class="list-group-item list-group-item-action">
                                  <i class="fa fa-bell"></i>
                                  Notifications
                              </a>


        <a href="#" class="list-group-item list-group-item-action">
                                    <i class="fa fa-envelope"></i>
                                    Messages
                                </a>

         <a href="#" class="list-group-item list-group-item-action">
                                     <i class="fa fa-bookmark"></i>
                                     Bookmarks
                                 </a>

         <a href="#" class="list-group-item list-group-item-action">
                                     <i class="fa fa-list"></i>
                                     Lists
                                 </a>

         <a href="#" class="list-group-item list-group-item-action">
                                     <i class="fa fa-user"></i>
                                     Profile
                                 </a>

         <a href="#" class="list-group-item list-group-item-action">
                                     <i class="fas fa-ellipsis-h"></i>
                                     More
                                 </a>

   </div>
`;
};
export default NavigationSidebar;