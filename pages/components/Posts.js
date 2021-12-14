import Post from "./Post"

const posts = [
    { 
        id: '1',
        username: 'rovertos',
        userImg: 'https://images.unsplash.com/photo-1555703473-5601538f3fd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
        img: 'https://unsplash.com/photos/fDw4K26USxI/download?force=true&w=640',
        caption: 'Subscribe and destroy the like button for the algorithm!'
    },
    { 
        id: '2',
        username: 'rovertos',
        userImg: 'https://images.unsplash.com/photo-1555703473-5601538f3fd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
        img: 'https://unsplash.com/photos/fDw4K26USxI/download?force=true&w=640',
        caption: 'Subscribe and destroy the like button for the algorithm!'
    }
]

function Posts() {
    return (
        <div>
            {posts.map(post => (
                <Post key={post.id} id={post.id} username={post.username} userImg={post.userImg} img={post.userImg} caption={post.caption}/>
            ))}
        </div>
    )
}

export default Posts
