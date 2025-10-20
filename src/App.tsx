import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import ScrollToTop from './components/ScrollToTop'
import MerchantLayout from './layouts/MerchantLayout'
import Index from './pages/Index'
import About from './pages/About'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import GettingStarted from './pages/GettingStarted'
import Support from './pages/Support'
import FAQ from './pages/FAQ'
import Apply from './pages/Apply'
import HelpCenter from './pages/HelpCenter'
// Manual pages
import ManualGettingStarted from './pages/manual/GettingStartedManual'
import ManualStoreManagement from './pages/manual/StoreManagementManual'
import ManualProductCatalog from './pages/manual/ProductCatalogManual'
import ManualOrderProcessing from './pages/manual/OrderProcessingManual'
import ManualCustomerManagement from './pages/manual/CustomerManagementManual'
import ManualAnalyticsReporting from './pages/manual/AnalyticsReportingManual'
import ManualAuthentication from './pages/manual/AuthenticationManual'
import ManualProductApi from './pages/manual/ProductApiManual'
import ManualOrderApi from './pages/manual/OrderApiManual'
import ManualWebhooks from './pages/manual/WebhooksManual'
import ManualSellerAgreement from './pages/manual/SellerAgreementManual'
import ManualProductGuidelines from './pages/manual/ProductGuidelinesManual'
import ManualShippingPolicies from './pages/manual/ShippingPoliciesManual'
import ManualReturnPolicies from './pages/manual/ReturnPoliciesManual'

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/support" element={<Support />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/help" element={<HelpCenter />} />
          {/* Manual routes */}
          <Route path="/manual/getting-started" element={<ManualGettingStarted />} />
          <Route path="/manual/store-management" element={<ManualStoreManagement />} />
          <Route path="/manual/product-catalog" element={<ManualProductCatalog />} />
          <Route path="/manual/order-processing" element={<ManualOrderProcessing />} />
          <Route path="/manual/customer-management" element={<ManualCustomerManagement />} />
          <Route path="/manual/analytics-reporting" element={<ManualAnalyticsReporting />} />
          <Route path="/manual/authentication" element={<ManualAuthentication />} />
          <Route path="/manual/product-api" element={<ManualProductApi />} />
          <Route path="/manual/order-api" element={<ManualOrderApi />} />
          <Route path="/manual/webhooks" element={<ManualWebhooks />} />
          <Route path="/manual/seller-agreement" element={<ManualSellerAgreement />} />
          <Route path="/manual/product-guidelines" element={<ManualProductGuidelines />} />
          <Route path="/manual/shipping-policies" element={<ManualShippingPolicies />} />
          <Route path="/manual/return-policies" element={<ManualReturnPolicies />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
