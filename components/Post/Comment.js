import { Avatar } from "@mui/material";
import { useSession } from "next-auth/react";
import ImageRoundedIcon from "@mui/icons-material/ImageRounded";
import EmojiEmotionsRoundedIcon from "@mui/icons-material/EmojiEmotionsRounded";
import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import { handleCommentState, useSSRCommentsState } from "../../atoms/modalPost";
import { useRecoilState } from "recoil";

function Comment({ modalPost, post, comments }) {
  const { data: session } = useSession();
  const [input, setInput] = useState("");
  const [realtimeComments, setRealtimeComments] = useState([]);
  const [useSSRComments, setUseSSRComments] =
    useRecoilState(useSSRCommentsState);
  const [handleComment, setHandleComment] = useRecoilState(handleCommentState);

  const handleCommentPost = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        post: post,
        postId: post._id,
        input: input,
        username: session.user.name,
        email: session.user.email,
        userImg: session.user.image,
        createdAt: new Date().toString(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();
    // console.log(responseData);

    setInput("");
    setHandleComment(true);
    // setModalOpen(false);
  };

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(`/api/comments/${post._id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const responseData = await response.json();
      setRealtimeComments(responseData);
      setHandleComment(false);
      setUseSSRComments(false);
    };

    fetchComments();
  }, [handleComment]);

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
            onClick={handleCommentPost}
            disabled={!input.trim()}
          >
            Post
          </button>
        </div>
      </div>
      {!useSSRComments
        ? realtimeComments.map((comment) => (
            <CommentList key={comment._id} comment={comment} />
          ))
        : comments
            .filter((obj) => obj.postId === post._id)
            .map((obj) => <CommentList key={obj._id} comment={obj} />)}
    </>
  );
}

export default Comment;
