import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
export default function Page2() {
  return (
    <div className="page page2">
      <div className="overline"></div>
      <div className="page2head">
        <div className="circle"></div> &nbsp; About Solero Ceramics
      </div>
      <div className="contentpage2">
        With four years of redefining interior decor and living spaces, Solero
        Ceramics has set new benchmarks that we are immensely proud of. As the
        leading porcelain slab tile manufacturer in India, located in Rajkot,
        Solero Ceramics stands at the forefront of innovation and quality in the
        tile industry. <br />
        <br /> We provide the most sophisticated porcelain tile solutions using
        state-of-the-art technology, expertise, and a relentless drive for
        innovation. Our name has become synonymous with excellence in the Indian
        tile industry. Driven by a passion for research and experimentation, we
        continually rise to meet the evolving needs of our customers, adapting
        to changing styles, architectural trends, and prioritizing environmental
        sustainability. Solero Ceramics has grown into the largest hub for tile
        manufacturing, building a lasting legacy of quality and innovation.{' '}
        <br />
        <br /> Our comprehensive range of porcelain slab tiles has been embraced
        by interior design projects worldwide, adorning homes, commercial
        spaces, hotels, universities, leisure facilities, and more. We
        continuously cater to the dynamic needs of our customers, simplifying
        living and enhancing spaces with our high-quality products. At Solero
        Ceramics, we believe tiles transcend mere functionality. Every step of
        our process, from material procurement to final testing, is subject to
        rigorous quality control. The end result is delight and satisfaction
        among architects, designers, dealers, contractors, and customers alike.
      </div>
      <Link to={'/company'} className="prodexpbutton">
        <div className="exploremorebutton">About Solero</div>
      </Link>
    </div>
  );
}
