import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import MonthlyBookkeeping from './pages/MonthlyBookkeeping'
import PayrollManagement from './pages/PayrollManagement'
import CorporateTax from './pages/CorporateTax'
import VatConsultancy from './pages/VatConsultancy'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/monthly-bookkeeping" element={<MonthlyBookkeeping />} />
        <Route path="/payroll-management" element={<PayrollManagement />} />
        <Route path="/corporate-tax" element={<CorporateTax />} />
        <Route path="/vat-consultancy" element={<VatConsultancy />} />
      </Routes>
      <Footer />
    </Router>
  )
}
