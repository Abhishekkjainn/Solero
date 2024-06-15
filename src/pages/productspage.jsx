import '../App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
export default function ProductsPage() {
  return (
    <div className="productspage">
      <Prodfinal />
    </div>
  );

  function Prodfinal() {
    return (
      <>
        <Prodpage1 />
        <Prodpage2 />
        <Prodlastpage />
      </>
    );
  }

  function Prodpage1() {
    return (
      <div className="prodpage1">
        <div className="companypageheadingpage1">
          {' '}
          <div className="circle comppagewhitecircle"></div> &nbsp; OUR PRODUCTS
        </div>
      </div>
    );
  }

  function Prodpage2() {
    return (
      <div className="propage2">
        <div className="page2head">
          <div className="circle"></div> &nbsp; Explore Our Products
        </div>
        <div className="productsection">
          <Prodtile
            prodtype="Marble"
            prodname="Onice Niro"
            imagesource="oniceniroprod.jpg"
          />
          <Prodtile
            prodtype="Marble"
            prodname="Statuario Freddo"
            imagesource="statuario-freddo-prod.jpg"
          />
          <Prodtile
            prodtype="Marble"
            prodname="Onice Aria Beige"
            imagesource="onice_aria_beige_prod.jpg"
          />
          <Prodtile
            prodtype="Marble"
            prodname="Quarzo Verde Aqua"
            imagesource="signature_quarzo_verde_acqua_prod.jpg"
          />
          <Prodtile
            prodtype="Marble"
            prodname="Onice Niro"
            imagesource="oniceniroprod.jpg"
          />
          <Prodtile
            prodtype="Marble"
            prodname="Statuario Freddo"
            imagesource="statuario-freddo-prod.jpg"
          />
          <Prodtile
            prodtype="Marble"
            prodname="Onice Aria Beige"
            imagesource="onice_aria_beige_prod.jpg"
          />
          <Prodtile
            prodtype="Marble"
            prodname="Quarzo Verde Aqua"
            imagesource="signature_quarzo_verde_acqua_prod.jpg"
          />
          <Prodtile
            prodtype="Marble"
            prodname="Onice Niro"
            imagesource="oniceniroprod.jpg"
          />
          <Prodtile
            prodtype="Marble"
            prodname="Statuario Freddo"
            imagesource="statuario-freddo-prod.jpg"
          />
          <Prodtile
            prodtype="Marble"
            prodname="Onice Aria Beige"
            imagesource="onice_aria_beige_prod.jpg"
          />
          <Prodtile
            prodtype="Marble"
            prodname="Quarzo Verde Aqua"
            imagesource="signature_quarzo_verde_acqua_prod.jpg"
          />
          <Prodtile
            prodtype="Marble"
            prodname="Onice Niro"
            imagesource="oniceniroprod.jpg"
          />
          <Prodtile
            prodtype="Marble"
            prodname="Statuario Freddo"
            imagesource="statuario-freddo-prod.jpg"
          />
          <Prodtile
            prodtype="Marble"
            prodname="Onice Aria Beige"
            imagesource="onice_aria_beige_prod.jpg"
          />
          <Prodtile
            prodtype="Marble"
            prodname="Quarzo Verde Aqua"
            imagesource="signature_quarzo_verde_acqua_prod.jpg"
          />
          <Prodtile
            prodtype="Marble"
            prodname="Onice Niro"
            imagesource="oniceniroprod.jpg"
          />
          <Prodtile
            prodtype="Marble"
            prodname="Statuario Freddo"
            imagesource="statuario-freddo-prod.jpg"
          />
          <Prodtile
            prodtype="Marble"
            prodname="Onice Aria Beige"
            imagesource="onice_aria_beige_prod.jpg"
          />
          <Prodtile
            prodtype="Marble"
            prodname="Quarzo Verde Aqua"
            imagesource="signature_quarzo_verde_acqua_prod.jpg"
          />
        </div>
      </div>
    );
  }

  function Prodtile({ prodtype, prodname, imagesource }) {
    return (
      <div className="productcardpage productcardpage1">
        <img
          src={imagesource}
          alt="productimage"
          className="prodback prodback1"
        />
        <div className="prodtext prodtext1">
          <div className="prodtype">{prodtype}</div>
          <div className="prodpagename">{prodname}</div>
        </div>
      </div>
    );
  }

  function Prodlastpage() {
    return (
      <div className="prodlastpage">
        <div className="notfoundheading">Didnt Find What Suits you ?</div>
        <div className="notfoundsubhead">We have it covered</div>
        <div className="contactusbutton">Contact Us</div>
      </div>
    );
  }
}
