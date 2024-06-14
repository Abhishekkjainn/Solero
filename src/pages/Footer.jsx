import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
export default function Footer() {
  return (
    <div className="footer">
      <div className="companylogofooter">
        <img src="logoremoved.png" alt="" className="complogofooter" />
        <div className="namefooter">Solero Ceramics Pvt Ltd</div>
      </div>
      <div className="firstdiv">
        <div className="headingfooter">
          {' '}
          <div className="circle whitecircle"></div> Information Links
        </div>
        <div className="links">
          <Link to="/company" className="linkdivfooter">
            Company
          </Link>
          <Link to="/products" className="linkdivfooter">
            Products
          </Link>
          <Link to="/downloads" className="linkdivfooter">
            Downloads
          </Link>
          <Link to="/media" className="linkdivfooter">
            Media
          </Link>
          <Link to="/contact" className="linkdivfooter">
            Contact
          </Link>
          <Link to="/career" className="linkdivfooter">
            Career
          </Link>
          <Link to="/shop" className="linkdivfooter">
            Shop
          </Link>
        </div>
      </div>
      <div className="seconddiv">
        <div className="terms">
          <div className="termshead">
            <div className="whitecircle"></div>
            &nbsp; Legal Documents
          </div>
          <div className="termslink">
            <Link to="/FAQ" className="linkdivfooter">
              FAQ's
            </Link>
            <Link to="/privacypolicy" className="linkdivfooter">
              Privacy Policy
            </Link>
            <Link to="/Termsandconditions" className="linkdivfooter">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
