const WhoToFollowListItem = (who) =>
{
    return (`
 <table class="wd-right-section">
 <tr class="bd-highlight-icon">

                     <td>

                         <img class="wd-logo" src=${who.avatarIcon}/>
                         <h6 class="container">
                             ${who.userName}
                         </h6>
                         <h6 class="container">${who.handle}</h6>
                     </td>
                     <td class="wd-follow-button">
                         <button type="submit" class="btn btn-primary"
                                 style="border-radius: 50px">
                             Follow
                         </button>
                     </td>
                 </tr>

 </table>
 `);
}
export default WhoToFollowListItem;
