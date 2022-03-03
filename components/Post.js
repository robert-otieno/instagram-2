import { BookmarkAltIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon } from "@heroicons/react/outline"
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid"

function Post({ id, username, userImg, img, caption }) {
    return (
        <div className='bg-white dark:bg-gray-900 my-7 border dark:border-gray-800 rounded-sm'>
            {/* Header */}
            <div className='flex items-center p-5'>
                <img src={userImg} className="rounded-full h-12 w-12 object-contain border mr-3" alt="" />
                <p className='flex-1 font-bold dark:text-white'>{username}</p>
                <DotsHorizontalIcon className="h-5 dark:invert" />
            </div>

            <img className='object-cover w-full' src={img} alt=""/>

            <div className='flex justify-between px-4 pt-4'>
                <div className='flex space-x-4 dark:invert'>
                    <HeartIcon className='btn'/>
                    <ChatIcon className='btn'/>
                    <PaperAirplaneIcon className='btn'/>
                </div>
                <BookmarkAltIcon className='btn dark:invert' />
            </div>
            
            <p className="p-5 truncate dark:text-gray-200">
                <span className='font-bold mr-1'>{username} </span>
                {caption}
            </p>

            <form className="flex items-center p-4">
                <EmojiHappyIcon className='h-7 dark:invert'/>
                <input type="text" className='border-none flex-1 focus:ring-0 mx-3 outline-none' placeholder="Add a comment..."/>
                <button className='font-semibold text-blue-400'>Post</button>
            </form>
            {/* Comments */}
            {/* Input Box */}
        </div>
    )
}

export default Post
