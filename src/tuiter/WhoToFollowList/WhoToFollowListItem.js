const WhoToFollowListItem = (
    {
      who
    }
   ) => {
    return(
     <li className="list-group-item">
      <div className="row">
      <div className="col-2">
             <img className="rounded-circle" height={48} width ={48} src={who.avatarIcon}/>
           </div>
        <div className="col-8">
          <div className="fw-bold">{who.userName}</div>
          <div>@{who.handle}</div>
        </div>
        <div className="col-2">
          <button className="btn btn-primary rounded-pill float-end">Follow</button>
        </div>
      </div>
     </li>
   
    );
   };
   export default WhoToFollowListItem;