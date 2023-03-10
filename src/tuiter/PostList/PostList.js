/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import PostItem from "./PostItem";

import post from "./posts.json"

const PostList = () => {
    return (
           <div className="list-group bg-dark ">
                <div className="list-group-item ">
                       {
                            post.map(posts => {
                                return(
                                <PostItem posts ={posts}/>
                                )
                            })
                        }
                 </div>
             </div>
); }

export default PostList;
