import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import loadingImage from './assets/loading.jpg';

// Lazy load the components
const LazyHome = lazy(() => import('./pages/user/home'));
const LazyLogin = lazy(() => import('./pages/user/login'));
const LazyContact = lazy(() => import('./pages/user/contact'));
const LazyAbout = lazy(() => import('./pages/user/about'));
const LazyProfile = lazy(() => import('./pages/user/profile'));
const LazyApplication = lazy(() => import('./pages/user/application'));
const LazyFront = lazy(() => import('./pages/user/front'));
const LazyCourse = lazy(() => import('./pages/user/course'));
const LazyFeedback = lazy(() => import('./pages/user/feedback'));
const LazyStatus = lazy(() => import('./pages/admin/status'));
const LazyAdmin = lazy(() => import('./pages/admin/admin'));

function App() {
  return (
    <Router>
      <Suspense fallback={<img src={loadingImage} alt="Loading..." />}>
        <Routes>
          <Route path="/" element={<LazyFront />} />
          <Route path="/home" element={<LazyHome />} />
          <Route path="/login" element={<LazyLogin />} />
          <Route path="/contact" element={<LazyContact />} />
          <Route path="/about" element={<LazyAbout />} />
          <Route path="/profile" element={<LazyProfile />} />
          <Route path="/application" element={<LazyApplication />} />
          <Route path="/course" element={<LazyCourse />} />
          <Route path="/feedback" element={<LazyFeedback />} />
          <Route path="/status" element={<LazyStatus />} />
          <Route path="/admin" element={<LazyAdmin />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
