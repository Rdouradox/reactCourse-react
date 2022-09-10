import MyComponent from './MyComponent'

const FirstComponent = () => {
  //   essa função faz texto h1
  return (
    <div>
      <h1 className="teste">meu primeiro componente</h1>
      <MyComponent />
    </div>
  )
}

export default FirstComponent
