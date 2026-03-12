import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import BemVindo from './components/BemVindo'

function App() {
  return (
    <div>
      <Header
       Titulo='Meus Hábitos Diários'
       Descricao='Gerencie seus hábitos diários de forma simples e visual'
      />
      <BemVindo nomeUsuario="turma iteam" totalHabitos={55}/>
      <Footer/> 
    </div>
  )
}

export default App