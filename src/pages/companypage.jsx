import '../App.css';
import { Parallax, Background } from 'react-parallax';
import Page7 from './Page7';
import { Helmet } from 'react-helmet';

export default function CompanyPage() {
  return (
    <div className="companypagemain">
      <Helmet>
        <title>About Solero Ceramics | Solero Ceramics</title>
      </Helmet>
      <CompPage1 />
      <CompPage2 />
      <CompPage3 />
      <CompPage4 />
      <CompPage5 />
      <CompPage6 />
      <Page7 />
    </div>
  );

  function CompPage1() {
    return (
      <div className="companypage1">
        <div className="companypageheadingpage1">
          {' '}
          <div className="circle comppagewhitecircle"></div> &nbsp; About Solero
        </div>
      </div>
    );
  }

  function CompPage2() {
    return (
      <div className="companypage2">
        <div className="comppage2heading">
          {' '}
          <div className="circle"></div> &nbsp; Know About Solero
        </div>
        <div className="contentcomppage2">
          Driven by innovation and supported by cutting-edge technology and
          professional expertise, Solero has quickly become a leading porcelain
          tile company in India with a global reach. In just four years, we have
          earned a reputation as one of the world's most trusted porcelain slab
          manufacturing brands, thanks to our commitment to quality products and
          exceptional customer service for clients and channel partners
          worldwide. <br />
          <br /> With our dynamic capability to provide exceptional slab
          solutions through world-class technology and unmatched proficiency,
          Solero is a pioneering manufacturer of 1600*3200mm porcelain slab
          tiles in India. Inspired by the wonders of nature, we offer superior
          alternatives to marble slabs, combining exquisite design with
          excellent craftsmanship. <br />
          <br /> Producing up to 13,000 square meters per day, we are a globally
          recognized slab tile manufacturing company based in Morbi. Solero has
          set a new standard in the industry with unparalleled porcelain slabs,
          catering to both traditional and modern architectural, furnishing, and
          design applications. Solero is the ultimate solution for all your
          architectural needs. <br />
          <br />{' '}
          <em className="quote">
            <b>
              {' '}
              “At Solero, we provide state-of-the-art porcelain slabs designed
              to add a majestic touch to any space.”
            </b>
          </em>
        </div>
      </div>
    );
  }

  function CompPage3() {
    return (
      <div className="companypage3">
        {/* <div className="soleroheadingparallax">
          {' '}
          <div className="circle parallaxcircle"></div>&nbsp; Solero
        </div>
        <div className="parallaximage">
          <img src="parallax.png" alt="" className="parallaximageimg" />
        </div> */}
        <Parallax
          blur={2}
          bgImage="/para.jpg"
          bgImageAlt="the cat"
          strength={400}
          className="parallax"
        >
          <div className="parallaxcontent">
            <div className="soleroheadingparallax">
              {' '}
              <div className="circle parallaxcircle"></div>&nbsp; Solero
            </div>
          </div>
        </Parallax>
      </div>
    );
  }

  function CompPage4() {
    return (
      <div className="companypage4">
        <div className="contentbrandid">
          <h2 className="brandidhead">BRAND IDENTITY</h2>
          <div className="textbrandid">
            By leveraging our technological expertise and exceptional skills,
            Solero has emerged as a certified leader in the manufacturing of
            quality slab tiles in India. Since our inception, our team has been
            continually evolving to deliver top-grade tile solutions that cater
            to a diverse global clientele. Solero is establishing a formidable
            presence in the rapidly growing tile industry through an innovative
            approach. As a visionary leader in India, we aim to be a global
            trendsetter in porcelain slabs and the foremost company for
            large-format porcelain tiles. Our core philosophy for building a
            strong brand identity is founded on creativity, innovation, and
            excellence. Through our innovative strategies, Solero is solidifying
            its presence in the tile industry.
          </div>
        </div>
        <div className="imagebrandid"></div>
      </div>
    );
  }

  function CompPage5() {
    return (
      <div className="companypage4">
        <div className="imagebrandid"></div>
        <div className="contentbrandid">
          <h2 className="brandidhead">BRAND INSIGHTS</h2>
          <div className="textbrandid">
            Solero has been founded on firm values at the company’s
            core—integrity, honesty, and a dedication to delivering the best
            porcelain slabs to our customers. We are more than just a porcelain
            tile company; we are your partners, setting the standard for
            providing unmatched tiling solutions. Thanks to in-depth research,
            the highest quality materials, and cutting-edge technology, Solero
            has become a trustworthy porcelain tile brand, helping you create
            unique dimensions for your space. As a leading porcelain slabs
            company, we strive to address every issue our clients face. Our
            customized solutions and prompt responses to specific requirements
            make us your reliable partners as dynamic slab manufacturers. Our
            passion, hard work, and commitment have established us as a
            dependable tile company for your architectural needs!
          </div>
        </div>
      </div>
    );
  }

  function CompPage6() {
    return (
      <div className="companypage6">
        <div className="line"></div>
        <div className="comppage2heading">
          {' '}
          <div className="circle"></div> &nbsp; OUR VALUES
        </div>

        <div className="valuescontent">
          With over 450 employees, we are a pioneering porcelain tile
          manufacturing company that upholds values of integrity, respect,
          creativity, innovation, and professionalism. These principles are
          driven by our vision to develop and provide exceptional tiling
          solutions for our clients. At Solero, our people are the backbone of
          our business. We believe in the strength of unity and continually
          empower each other to serve our customers, partners, and community in
          the best possible way. We are a company of bold enthusiasts, eager to
          approach things uniquely.
        </div>

        <div className="horizontalscrollcard">
          <div className="trustcard trustcardcomp1">
            <div className="heading">Integrity</div>
            <div className="contentpg4">
              We say what we do and we do what we say. Integrity stands at the
              heart of what we do. By treating everyone equally, we have open
              and honest communication. Our every action is united with fairness
              and respect for clients and colleagues too. We believe in
              providing the best tiling solutions- together.
            </div>
          </div>
          <div className="trustcard trustcardcomp2">
            <div className="heading">Innovation</div>
            <div className="contentpg4">
              Innovation leads to action. Our company constantly strives to
              exceed the set limits through new ideas, its application, and
              learning from mistakes. Our curiosity and dedication to creating
              better solutions lead us to generate new tiling solutions and set
              new benchmarks within the company as well as in the whole tile
              industry.
            </div>
          </div>
          <div className="trustcard trustcardcomp3">
            <div className="heading">Professionalism</div>
            <div className="contentpg4">
              Lioli consists of experienced professionals who hold the highest
              standards of professionalism in all roles and areas of
              specialization. We take our work seriously! By constantly evolving
              and upgrading our skills, we respond to the changing world by
              going the extra mile to get the desired results. Our teamwork and
              innovative excellence make us apart from others.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
