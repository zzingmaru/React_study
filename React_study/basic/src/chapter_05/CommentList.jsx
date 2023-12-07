import React from "react";
import Comment from "./Comment";

const comments = [
    {
        id: 1,
        name: "전상현",
        comment: "Hi, i'm Sanghyeon",
    },
    {
        id: 2,
        name: "강호동",
        comment: "리액트 먹는건가유?",
    },
    {
        id: 3,
        name : "김지선",
        comment: " 리액트 배워볼래용",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) =>{
                return (
                    <Comment key={comment.id} name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;