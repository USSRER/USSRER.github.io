import { HashRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import Home from './pages/Home'
import LlmTech from './pages/LlmTech'
import './App.css'

function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/llm-tech" element={<LlmTech />} />
        </Routes>
      </HashRouter>
    </LanguageProvider>
  )
}

export default App
