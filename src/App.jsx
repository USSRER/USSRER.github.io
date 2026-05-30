import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LlmTech from './pages/LlmTech'
import './App.css'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/llm-tech" element={<LlmTech />} />
      </Routes>
    </HashRouter>
  )
}

export default App
