/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./index.css";
const PostSummaryItem   = ({posts}) => {
    return(
        <>
        <div className="row mt-4 border-bottom border-secondary  border-0 ">
            <div className="col-1 col-sm-2">
                <img className="d-block ui-w-40 rounded-circle" src={posts.userImage}></img>
            </div>
            <div className="col-11 col-sm-10">
                <div className="row">
                    <div className="col-10 col-sm-11">
                        <p>{posts.userName}<i className="fas fa-check-circle"></i>
                            <span className="text-muted">@{posts.handle} &middot; {posts.time}</span>
                        </p>
                        <p>{posts.title}</p>
                    </div>
                     <div className="col-2 col-sm-1">
                        <i className=" fas fa-ellipsis-h  text-muted"></i>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="row wd-image border border-secondary ">
                            <div className="row  wd-image ">
                                <img className= "wd-round-corner" src={posts.postImage} height="100%" width="100%"></img>
                            </div>
                             <div className="row  ms-2 ">
                                       <span className="border-top border-secondary"><br></br></span>
                                 <span className="wd-title-post  mt-2 ">{posts.postTitle}</span><br></br>
                                    <span className="text-muted mt-2">{posts.postContent}</span>


                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="icons mt-4">
                                <a href="#"><i className="icon-comment-alt icon far fa-comment  text-muted "><span className="icon-text ms-1">{posts.comments}</span></i></a>
                                <a href="#"><i className="icon-random icon fas fa-retweet ms-4 text-muted"><span className="icon-text ms-1">{posts.shares}</span></i> </a>
                                <a href="#"><i className="icon-heart icon red fas fa-heart ms-4 text-muted"><span className="icon-text red ms-1">{posts.likes}</span></i> </a>
                                <a href="#"><i className="icon-upload-alt icon fas fa-upload ms-4 text-muted"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
);
}
export default PostSummaryItem;
