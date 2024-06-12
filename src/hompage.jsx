import Page1 from './pages/Page1';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ShopPage from './pages/shoppage';
import CompanyPage from './pages/companypage';
import ProductsPage from './pages/productspage';
import DownloadsPage from './pages/downloadspage';
import MediaPage from './pages/mediapage';
import CareerPage from './pages/careerpage';
import ContactsPage from './pages/contactspage';

export default function Homepage() {
  return (
    <Router>
      <div className="Homepage">
        <Header />
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/downloads" element={<DownloadsPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/contact" element={<ContactsPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </div>
    </Router>
  );

  function Header() {
    return (
      <div className="Header">
        <Link to={'/'} className="companylogo">
          <img src="logoremoved.png" alt="" className="headerlogo" />
          <div className="companyname">Solero Ceramics</div>
        </Link>

        <div className="headerlinks">
          <Link to="/company" className="linkdiv">
            Company
          </Link>
          <Link to="/products" className="linkdiv">
            Products
          </Link>
          <Link to="/downloads" className="linkdiv">
            Downloads
          </Link>
          <Link to="/media" className="linkdiv">
            Media
          </Link>
          <Link to="/contact" className="linkdiv">
            Contact
          </Link>
          <Link to="/career" className="linkdiv">
            Career
          </Link>
          <Link to="/shop" className="linkdiv">
            Shop
          </Link>
        </div>
      </div>
    );
  }
}
