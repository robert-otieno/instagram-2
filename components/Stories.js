import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

import { faker } from '@faker-js/faker'

import Story from "./Story"

function Stories() {
  const [suggestions, setSuggestions] = useState([])
  const { data: session } = useSession()

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      avatar: faker.internet.avatar(),
      username: faker.internet.userName(),
      id: i,
    }))

    setSuggestions(suggestions)
  }, [])

  return (
    <div className='stories'>
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
