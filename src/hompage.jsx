import Page1 from './pages/Page1';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ShopPage from './pages/shoppage';
import CompanyPage from './pages/companypage';
import ProductsPage from './pages/productspage';
import DownloadsPage from './pages/downloadspage';
import MediaPage from './pages/mediapage';
import CareerPage from './pages/careerpage';
import ContactsPage from './pages/contactspage';
import { useState } from 'react';
import AllPages from './Allpages';
import Footer from './pages/Footer';
import FAQPage from './pages/FAQpage';
import PrivacyPage from './pages/privacypolicypage';
import TermsPage from './pages/termsPage';

export default function Homepage() {
  return (
    <Router>
      <div className="Homepage">
        <Header />
        <Routes>
          <Route path="/" element={<AllPages />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/downloads" element={<DownloadsPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/contact" element={<ContactsPage />} />

          <Route path="/FAQ" element={<FAQPage />} />
          <Route path="/privacypolicy" element={<PrivacyPage />} />
          <Route path="/termsandconditions" element={<TermsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );

  function Header() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenu = () => {
      setIsMenuVisible(!isMenuVisible);
    };

    const hideMenu = () => {
      setIsMenuVisible(false);
    };

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
        </div>

        <div className="headerlinksresponsive">
          <div className="checkbox">
            <label className="hamburger">
              <input
                type="checkbox"
                checked={isMenuVisible}
                onChange={toggleMenu}
              />
              <svg viewBox="0 0 32 32">
                <path
                  className="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                ></path>
                <path className="line" d="M7 16 27 16"></path>
              </svg>
            </label>
          </div>
          {isMenuVisible && (
            <div className={`menubox ${isMenuVisible ? 'open' : ''}`}>
              <div className="responsivelinks">
                <Link
                  to="/company"
                  className="linkdivresponsive"
                  onClick={hideMenu}
                >
                  Company
                </Link>
                <Link
                  to="/products"
                  className="linkdivresponsive"
                  onClick={hideMenu}
                >
                  Products
                </Link>
                <Link
                  to="/downloads"
                  className="linkdivresponsive"
                  onClick={hideMenu}
                >
                  Downloads
                </Link>
                <Link
                  to="/media"
                  className="linkdivresponsive"
                  onClick={hideMenu}
                >
                  Media
                </Link>
                <Link
                  to="/contact"
                  className="linkdivresponsive"
                  onClick={hideMenu}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
