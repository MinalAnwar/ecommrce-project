import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from "./pages/landing_page";
import FAQs from './pages/Faq';
import PrivacyPolicy from './pages/privacyPolicy';
import JewelListing from './pages/jewelleryListing';
import ProductDetail from './pages/productDetailPage';
import Login from './pages/login';
import SignUp from './pages/signUp';
import ProfilePage from './pages/profile';
import ShopingCart from './pages/cart';
import Billing from './pages/billing';

function App() {
  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="signUp" element={<SignUp/>}/>
        <Route path="/Faqs" element={<FAQs/>}/>
        <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
        <Route path="/jewelLisitng/:category" element={<JewelListing/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/cart" element={<ShopingCart/>}/>
        <Route path="/billing" element={<Billing/>}/>
      </Routes>
    </Router>
    </div>

  );
}

export default App;
