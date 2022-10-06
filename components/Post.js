import { BookmarkAltIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Moment from "react-moment";
import { db } from "../firebase";

function Post({ id, username, userImg, img, caption }) {
  const { data: session } = useSession();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => 
    onSnapshot(
      query(collection(db, "posts", id, "comments"), orderBy("timestamp", "desc")),
      (snapshot) => setComments(snapshot.docs)), [db]);

  const sendComment = async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment("");

    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

  return (
    <div className="bg-white dark:bg-gray-900 my-7 border dark:border-gray-800 rounded-sm">
      {/* Header */}
      <div className="flex items-center p-5">
        <img src={userImg} className="rounded-full h-12 w-12 object-contain border mr-3" alt="" />
        <p className="flex-1 font-bold dark:text-gray-200">{username}</p>
        <DotsHorizontalIcon className="h-5 dark:invert" />
      </div>

      {/* img */}
      <img className="object-cover w-full" src={img} alt="" />

      {/* Buttons */}
      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4 dark:invert">
            <HeartIcon className="btn" />
            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn" />
          </div>
          <BookmarkAltIcon className="btn dark:invert" />
        </div>
      )}

      <p className="p-5 truncate dark:text-gray-200">
        <span className="font-bold mr-1">{username} </span>
        {caption}
      </p>

      {/* Comments */}
      {comments.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-center space-x-2 mb-3">
              <img className="h-7 rounded-full" src={comment.data().userImage} alt="" />
              <p className="text-sm flex-1 dark:text-gray-200">
                <span className="font-bold">{comment.data().username}</span>{" "}
                {comment.data().comment}
                </p>
                <Moment fromNow className="pr-5 text-sm dark:text-gray-200">
                  {comment.data().timestamp?.toDate()}
                </Moment>
            </div>
          ))}
        </div>
      )}

      {/* Input Box */}
      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7 dark:invert" />
          <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} className="border-none flex-1 focus:ring-0 mx-3 outline-none" placeholder="Add a comment..." />
          <button type="submit" disabled={!comment.trim} onClick={sendComment} className="font-semibold text-blue-400">
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;