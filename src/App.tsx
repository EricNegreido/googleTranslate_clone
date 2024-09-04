import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useStore } from './hooks/useStore';
import { AUTO_LANGUAGE } from './constants';

function App() {
  const {fromLanguage, toLanguage, setFromLanguage, interchangeLanguages} = useStore()
  return (
    <div>
     <h1>Google Translate</h1>
      <section>
        <div>
          <h2>From</h2>
          <p>De: {fromLanguage}</p>
        </div>
        <div>
          <button 
          disabled={ fromLanguage == AUTO_LANGUAGE} 
          onClick={() => interchangeLanguages()}> Intercambiar</button>
        </div>
        <div>
          <h2>To</h2>
            <p>A: {toLanguage}</p>
        </div>
      </section>
    </div>
  )
}

export default App
