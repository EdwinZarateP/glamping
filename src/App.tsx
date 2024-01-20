import './App.css'
import NavBar from './componentes/Navbar.tsx'
import Filtros from './componentes/Filtros.tsx'
import Glampings from './componentes/Glampings.tsx'
import Footers from './componentes/Footers.tsx'

function App() {

  return (
    <div className='App'>

      
      {/* NavBar */}
      <NavBar />

      {/* Filtros */}
      <Filtros/>

      {/* glampings */}
      <Glampings/>
      
      {/* Footers */}

      <Footers/>

    </div>
  )
}

export default App
