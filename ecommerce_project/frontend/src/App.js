import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from "./pages/landing_page";
import FAQs from './pages/Faq';
import PrivacyPolicy from './pages/privacyPolicy';
function App() {
  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/Faqs" element={<FAQs/>}/>
        <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>  
      </Routes>
    </Router>
    </div>

  );
}

export default App;
