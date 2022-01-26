import { Avatar } from "@mui/material";
import { useSession } from "next-auth/react";
import ImageRoundedIcon from "@mui/icons-material/ImageRounded";
import EmojiEmotionsRoundedIcon from "@mui/icons-material/EmojiEmotionsRounded";
import { useState } from "react";

function Comment({ modalPost }) {
  const { data: session } = useSession();

  const [input, setInput] = useState("");
  // const [photoUrl, setPhotoUrl] = useState("");

  return (
    <>
      <div className="flex items-top mx-2.5 pt-1 text-black/60 dark:text-white/75 transition ease-out">
        <Avatar
          src={session?.user?.image}
          className="!h-10 !w-10 cursor-pointer"
        />
        <div className="flex-grow mr-auto ml-2">
          <div className="flex flex-grow items-center border-2 rounded-full mb-2">
            <input
              type="text"
              placeholder="Add a comment..."
              className="flex-grow bg-transparent text-sm  p-2 focus:outline-none placeholder-black/70 dark:placeholder-white/75"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div className="iconButton">
              <EmojiEmotionsRoundedIcon />
            </div>
            <div className="iconButton">
              <ImageRoundedIcon />
            </div>
          </div>
          <button
            className="font-medium bg-blue-400 hover:bg-blue-500 text-sm text-black disabled:hidden rounded-full px-3.5 py-1"
            type="submit"
            disabled={!input.trim()}
          >
            Post
          </button>
        </div>
      </div>
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
                <span>timeago</span>
                {/* <IconButton>
                <MoreHorizRoundedIcon className="dark:text-white/75 h-7 w-7" />
              </IconButton> */}
              </div>
            </div>
            <div>comment message</div>
          </div>
          <div className="flex text-[12px] my-1 divide-x divide-gray-300">
            <span className="cursor-pointer pr-2">Like</span>
            <span className="cursor-pointer pl-2">Reply</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comment;
