import { HashRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import Home from './pages/Home'
import LlmTech from './pages/LlmTech'
import Sa2Tech from './pages/Sa2Tech'
import IotTech from './pages/IotTech'
import './App.css'

function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/llm-tech" element={<LlmTech />} />
          <Route path="/sa2-tech" element={<Sa2Tech />} />
          <Route path="/iot-tech" element={<IotTech />} />
        </Routes>
      </HashRouter>
    </LanguageProvider>
  )
}

export default App
