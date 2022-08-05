import './App.css';
import Summit from './sessions/Summit';
import Certification from './sessions/Certification';
import CardVideo from './sessions/CardVideo'
import Baseboard from './sessions/Baseboard'

function App() {

  return (
    <div className="flex-container">

      <Summit />
      <Certification />
      <CardVideo />
      <Baseboard />

    </div>
  )
}

export default App
