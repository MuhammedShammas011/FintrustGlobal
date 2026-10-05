import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import MonthlyBookkeeping from './pages/MonthlyBookkeeping'
import PayrollManagement from './pages/PayrollManagement'
import CorporateTax from './pages/CorporateTax'
import VatConsultancy from './pages/VatConsultancy'
import ExciseTax from './pages/ExciseTax'
import TaxAudit from './pages/TaxAudit'
import VatPenalties from './pages/VatPenalties'
import AmlCompliance from './pages/AmlCompliance'
import EconomicSubstanceAdvisory from './pages/EconomicSubstanceAdvisory'
import BudgetingForecasting from './pages/BudgetingForecasting'
import CfoOutsourcing from './pages/CfoOutsourcing'
import ErpAccounting from './pages/ErpAccounting'
import OperationsDueDiligence from './pages/OperationsDueDiligence'
import AccountsDueDiligence from './pages/AccountsDueDiligence'
import CommerceDueDiligence from './pages/CommerceDueDiligence'
import TaxDueDiligence from './pages/TaxDueDiligence'
import BusinessManagement360 from './pages/BusinessManagement360'

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
        <Route path="/excise-tax" element={<ExciseTax />} />
        <Route path="/tax-audit" element={<TaxAudit />} />
        <Route path="/vat-penalties" element={<VatPenalties />} />
        <Route path="/aml-compliance" element={<AmlCompliance />} />
        <Route path="/economic-substance-advisory" element={<EconomicSubstanceAdvisory />} />
        <Route path="/budgeting-forecasting" element={<BudgetingForecasting />} />
        <Route path="/cfo-outsourcing" element={<CfoOutsourcing />} />
        <Route path="/erp-accounting" element={<ErpAccounting />} />
        <Route path="/operations-due-diligence" element={<OperationsDueDiligence />} />
        <Route path="/accounts-due-diligence" element={<AccountsDueDiligence />} />
        <Route path="/commerce-due-diligence" element={<CommerceDueDiligence />} />
        <Route path="/tax-due-diligence" element={<TaxDueDiligence />} />
        <Route path="/360-business-management" element={<BusinessManagement360 />} />
      </Routes>
      <Footer />
    </Router>
  )
}
