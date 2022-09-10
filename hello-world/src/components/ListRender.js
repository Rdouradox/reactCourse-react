import { useState } from 'react'

const ListRender = () => {
  const [list] = useState(['Rodrigo', 'Diogo', 'Leonardo', 'Maria'])

  const [users, setUsers] = useState([
    { id: 1, name: 'Rodrigo', age: 24 },
    { id: 2, name: 'Diogo', age: 26 },
    { id: 3, name: 'Leonardo', age: 29 },
  ])
  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4)

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id)
    })
  }

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete randon user</button>
    </div>
  )
}

export default ListRender
