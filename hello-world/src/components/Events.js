const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e)
    console.log('Ativou o evento')
  }

  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando isso</h1>
    } else {
      return <h1>Também posso renderizar isso!</h1>
    }
  }

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>clique aqui</button>
      </div>
      <div>
        <button
          onClick={() => {
            console.log('clicou!')
          }}
        >
          clique aqui também
        </button>
        <button
          onClick={() => {
            if (true) {
              console.log('Isso nao deveria existir.')
            }
          }}
        >
          Clica aqui, pf!{' '}
        </button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  )
}

export default Events
