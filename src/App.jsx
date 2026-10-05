import { useEffect } from 'react';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { AuthProvider } from './api';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';
import HomePage from './pages/HomePage';
import BrandedDomainsPage from './pages/BrandedDomainsPage';
import LinkManagementPage from './pages/LinkManagementPage';
import AuthPage from './pages/AuthPage';
import NotFoundPage from './pages/NotFoundPage';
import { FEATURES } from './config/features';

function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/app/branded-domains" element={<BrandedDomainsPage />} />
          <Route path="/app/features/link-management" element={<LinkManagementPage />} />
          <Route path="/login" element={FEATURES.auth ? <AuthPage mode="login" /> : <ComingSoon />} />
          <Route path="/signup" element={FEATURES.auth ? <AuthPage mode="signup" /> : <ComingSoon />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
