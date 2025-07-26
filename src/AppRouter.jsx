import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import HowItWorks from './HowItWorks';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
      </Routes>
    </Router>
  );
}
