import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import MonthlyBookkeeping from './pages/MonthlyBookkeeping'
import PayrollManagement from './pages/PayrollManagement'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/monthly-bookkeeping" element={<MonthlyBookkeeping />} />
        <Route path="/payroll-management" element={<PayrollManagement />} />
      </Routes>
      <Footer />
    </Router>
  )
}
