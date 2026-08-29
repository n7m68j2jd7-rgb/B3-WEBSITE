import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Book from './pages/Book';
import Coaching from './pages/Coaching';
import Podcast from './pages/Podcast';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div style={{ background: '#E9E7DF', color: '#191A16', fontFamily: "'Barlow',sans-serif" }}>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/podcast" element={<Podcast />} />
      </Routes>
    </div>
  );
}
