const Challenge = () => {
  const n1 = 2
  const n2 = 9
  const n3 = n1 + n2
  const somar = () => {
    if (true) {
      return console.log({ n3 })
    }
  }
  return (
    <div>
      <div>
        <h1>
          {n1} {n2}
        </h1>
      </div>
      <div>
        <button onClick={somar}>Clique para somar</button>
      </div>
      {somar}
    </div>
  )
}

export default Challenge
