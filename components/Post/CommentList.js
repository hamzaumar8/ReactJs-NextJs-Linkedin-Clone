import { Avatar } from "@mui/material";
import React from "react";
import TimeAgo from "timeago-react";

function CommentList({ comment }) {
  return (
    <div className="flex align-top mx-2.5 pt-1 text-black/60 dark:text-white/75">
      <Avatar className="!h-10 !w-10 cursor-pointer my-2" />
      <div className="flex-grow mr-auto ml-2 ">
        <div className="dark:bg-gray-700 rounded-lg rounded-tl-none p-2 pl-2.5">
          <div className="flex justify-between leading-none">
            <div className="flex-grow ml-auto mr-2 text-sm leading-none">
              <p>Name</p>
              <p className="text-[12px]">
                Youtuber | Researcher | Developer | Story Teller
              </p>
            </div>
            <div className="text-[12px]">
              <span>
                <TimeAgo
                  datetime={comment.createdAt}
                  className="text-xs dark:text-white/75 opacity-80"
                />
              </span>
              {/* <IconButton>
        <MoreHorizRoundedIcon className="dark:text-white/75 h-7 w-7" />
      </IconButton> */}
            </div>
          </div>
          <div>{comment.input}</div>
        </div>
        <div className="flex text-[12px] my-1 divide-x divide-gray-300">
          <span className="cursor-pointer pr-2">Like</span>
          <span className="cursor-pointer pl-2">Reply</span>
        </div>
      </div>
    </div>
  );
}

export default CommentList;
