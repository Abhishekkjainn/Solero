import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
export default function Page6() {
  return (
    <div className="page6 page">
      <div className="page2head pg6head">
        <div className="circle"></div> &nbsp; Explore Dimesions According to you
      </div>
      <div className="dimensionsdiv">
        <div className="dimensionbox dimensionbox1">
          <div className="dimcontent">800 x 800 mm</div>
        </div>
        <div className="dimensionbox dimensionbox2">
          <div className="dimcontent">1200 x 1200 mm</div>
        </div>
        <div className="dimensionbox dimensionbox3">
          <div className="dimcontent">1200 x 2400 mm</div>
        </div>
        <div className="dimensionbox dimensionbox4">
          <div className="dimcontent">1200 x 2400 mm</div>
        </div>
        <div className="dimensionbox dimensionbox5">
          <div className="dimcontent">1600 x 1600 mm</div>
        </div>
        <div className="dimensionbox dimensionbox6">
          <div className="dimcontent">1600 x 3200 mm</div>
        </div>
        <div className="dimensionbox dimensionbox7">
          <div className="dimcontent">1600 x 4800 mm</div>
        </div>
      </div>
      <Link to={'/products'} className="prodexpbutton">
        <div className="exploremoredimbutton">Explore Dimensions</div>
      </Link>
    </div>
  );
}
