function Story({ img, username }) {
    return (
        <div>
            <img className='stories--image' src={img} alt="" />
            <p className='stories--username'>{username}</p>
        </div>
    )
}

export default Story