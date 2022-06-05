import { Avatar } from './Avatar'

const team = {
  guybarnard: {
    name: 'Guy Barnard',
    githubUsername: 'guybarnard',
    picture: '/images/people/guybarnard.jpeg',
  }
}

export default function Authors({ authors }) {
  const grid = `grid-cols-${authors.length} md:grid-cols-${authors.length}`
  return (
    <div
      className={`authors grid gap-4 py-8 border-b border-gray-400 border-opacity-20 ${grid}`}
    >
      {authors.map((username: string) =>
        Boolean(team[username]) ? (
          <Avatar key={username} {...team[username]} />
        ) : (
          console.warn('no author found for', username)
        )
      )}
    </div>
  )
}
