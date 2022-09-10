import { useState } from 'react'

const ManageData = () => {
  const [number, setNumber] = useState(12)

  return (
    <div>
      <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(25)}>Mudar variavel v2</button>
      </div>
    </div>
  )
}

export default ManageData
