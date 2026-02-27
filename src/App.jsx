import './App.css'
import CVDisplay from './components/CVDisplay/CVDisplay'
import CVFormDisplay from './components/CVFormDisplay/CVFormDisplay'
function App() {

  return (
    
    <div className="app-container">
      <CVFormDisplay></CVFormDisplay>
      <CVDisplay></CVDisplay>
    </div>
    
  )
}

export default App
