import { useState } from 'react'
import { HashRouter, Route, Routes} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar.jsx'
import Main from './components/smthing/main.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
        <h1>NiponTeam</h1>
        <HashRouter>
            <Navbar />
            <Routes>
                <Route path={"/"} element={<Main />} />
            </Routes>
        </HashRouter>
        <footer>
            <span>Мы украли этот footer вместе с правами.</span>
            <h6>РЕКЛАМА: нам не хватило бюджета ее написать</h6>
        </footer>
    </main>
  )
}

export default App
