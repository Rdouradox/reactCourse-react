// components
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'
import Events from './components/Events'
import Challenge from './components/Challenge'
import City from './assets/city.jpg'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import Fragment from './components/Fragment'
import CarDetailas from './components/CarDetailas'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'

// styles / css
import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
import ChangeMessageState from './components/ChangeMessageState'

function App() {
  const cars = [
    { id: 4, brand: 'Ferarri', color: 'Amarela', km: 0 },
    { id: 2, brand: 'Ferarri', color: 'Branco', km: 60000 },
    { id: 3, brand: 'Jaguar', color: 'Verde', km: 85000 },
  ]

  function showMessage() {
    console.log('Evento comp. pai')
  }

  const [message, setMessage] = useState('')

  const handleMessage = (msg) => setMessage(msg)

  return (
    <div className="App">
      {/* <h1>fundamentos react</h1>
      <FirstComponent />
      <TemplateExpressions />
      <Events />
      <Challenge /> */}
      {/* img public */}
      {/* <div>
        <img src="/img1.png" alt="" />
      </div> */}
      {/* img assets */}
      {/* <div>
        <img src={City} alt="" />
      </div> */}
      {/* <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name="Rodrigo" />
      <CarDetailas brand="VW" km={20000} color="Azul" />
      <CarDetailas brand="Ford" km={0} color="Vermelho" />
      <CarDetailas brand="Nissan" km={100000} color="Branco" />
      {cars.map((car) => (
        <CarDetailas brand={car.brand} color={car.color} km={car.km} />
      ))}
      <Fragment propFragment="test" />
      <Container>
        <p>Olá mundo</p>
      </Container> */}
      <ExecuteFunction myFunction={showMessage} />
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
    </div>
  )
}

export default App
