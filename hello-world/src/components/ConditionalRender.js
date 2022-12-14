import { useState } from 'react'
const ConditionalRender = () => {
  const [x] = useState(true)
  const [name] = useState('João')

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      <h1>If ternário</h1>
      {name === 'João' ? <p>O nome é João</p> : <p>Nome não encontrado</p>}
    </div>
  )
}

export default ConditionalRender
