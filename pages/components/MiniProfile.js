function MiniProfile() {
    return (
        <div className='flex items-center justify-between mt-14 ml-10'>
            <img className='w-16 h-16 rounded-full border p-[2px]' src="https://images.unsplash.com/photo-1555703473-5601538f3fd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />

            <div className='flex-1 mx-4'>
                <h2 className='font-bold'>rovertos</h2>
                <h3 className='text-sm text-gray-400'>Welcome to Instagram 2.0</h3>
            </div>

            <button className='text-blue-400 text-sm font-semibold'>Sign out</button>
        </div>
    )
}

export default MiniProfile
