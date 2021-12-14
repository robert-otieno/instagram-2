import faker from "faker"
import { useEffect, useState } from "react"
import Story from "./Story"

function Stories() {
    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        fetch('https://random-data-api.com/api/users/random_user?size=15')
        .then((response) => response.json())
        .then((json) => { 
            setSuggestions(json)
        });        
    }, [])

    return (
        <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
            {suggestions.map((profile) => (
                <Story key={profile.id} img={profile.avatar} username={profile.username} />
            ))}
        </div>
    )
}

export default Stories
