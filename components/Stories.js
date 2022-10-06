import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import Story from "./Story"

function Stories() {
    const [suggestions, setSuggestions] = useState([])
    const { data: session } = useSession()

    useEffect(() => {
        fetch('https://random-data-api.com/api/users/random_user?size=15')
        .then((response) => response.json())
        .then((json) => { 
            setSuggestions(json)
        });
    }, [])

    return (
        <div className='flex space-x-2 p-6 bg-white dark:bg-gray-900 mt-8 dark:border-gray-800 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
            {session && (
                <Story img={session.user.image} username={session.user.username} />
            )}
            {suggestions.map((profile) => (
                <Story key={profile.id} img={profile.avatar} username={profile.username} />
            ))}
        </div>
    )
}

export default Stories
