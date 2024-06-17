import '../App.css';
import { Helmet } from 'react-helmet';
export default function DownloadsPage() {
  return (
    <>
      <Helmet>
        <title>Download Center | Solero Ceramics</title>
      </Helmet>
      <div className="downloadpage">
        <Downpage1 />
        <Downpage2 />
      </div>
    </>
  );

  function Downpage1() {
    return (
      <div className="downloadpage1">
        <div className="companypageheadingpage1">
          {' '}
          <div className="circle comppagewhitecircle"></div> &nbsp; DOWNLOADS
        </div>
      </div>
    );
  }

  function Downloadsec({ sno, cardheadline, doclink }) {
    return (
      <div className="downloadsection">
        <div className="downpagesectioncontent">
          {' '}
          <div className="sno">{sno}</div>
          <div className="headingdownpage">{cardheadline}</div>
        </div>
        <div className="downloadbutton"></div>
      </div>
    );
  }

  function Downpage2() {
    return (
      <div className="downpage2">
        <Downloadsec
          sno={'1.'}
          cardheadline={'Product Catalog'}
          doclink={'https://abhishekjain.vercel.app'}
        />
        <Downloadsec
          sno={'2.'}
          cardheadline={'Dimension Catalog'}
          doclink={'https://abhishekjain.vercel.app'}
        />
        <Downloadsec
          sno={'3.'}
          cardheadline={'Company History'}
          doclink={'https://abhishekjain.vercel.app'}
        />
      </div>
    );
  }
}
