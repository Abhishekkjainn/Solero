import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
export default function Page3() {
  return (
    <div className="page page3">
      <div className="headingpage3">Explore Products </div>
      <div className="productpage">
        <div className="line1">
          <div className="productcard">
            <div className="prodimage">
              <img src="oniceniroprev.jpg" alt="" className="prodimg" />
              <div className="hover-content">
                <div className="prodcat">Marble</div>
                <div className="prodname">Onice Niro</div>
              </div>
            </div>
          </div>
          <div className="productcard">
            <div className="prodimage">
              <img src="floorprev.jpg" alt="" className="prodimg" />

              <div className="hover-content">
                <div className="prodcat">Wood</div>
                <div className="prodname">Wooden Flooring</div>
              </div>
            </div>
          </div>
        </div>
        <div className="line2">
          <div className="productcard">
            <div className="prodimage">
              <img
                src="terralianomellagranoprev.jpg"
                alt=""
                className="prodimg"
              />
              <div className="hover-content">
                <div className="prodcat">Concrete</div>
                <div className="prodname">Red Flooring</div>
              </div>
            </div>
          </div>
          <div className="productcard">
            <div className="prodimage">
              <img src="bathroomprev.jpg" alt="" className="prodimg" />

              <div className="hover-content">
                <div className="prodcat">Stone</div>
                <div className="prodname">Textured Tile</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to={'/products'} className="prodexpbutton">
        <div className="exploremorebutton">Explore More</div>
      </Link>

      <div className="linepg4"></div>
    </div>
  );
}
