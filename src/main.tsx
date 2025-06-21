import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { Page } from './layouts/page'

createRoot(document.getElementById('root')!).render(
  <Router>
    <Routes>
      <Route path="/" element={<Page />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </Router>
)
