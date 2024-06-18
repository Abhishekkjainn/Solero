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
    const handleDownload = () => {
      window.open(doclink, '_blank'); // Opens the PDF in a new tab
    };
    return (
      <div className="downloadsection">
        <div className="downpagesectioncontent">
          {' '}
          <div className="sno">{sno}</div>
          <div className="headingdownpage">{cardheadline}</div>
        </div>
        <div className="downloadbutton">
          <button class="Btn" onClick={handleDownload}>
            <svg
              class="svgIcon"
              viewBox="0 0 384 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
            </svg>
            <span class="icon2"></span>
          </button>
        </div>
      </div>
    );
  }

  function Downpage2() {
    return (
      <>
        <div className="downpage2">
          <Downloadsec
            sno={'1.'}
            cardheadline={'Product Catalog'}
            doclink={'pdf1.pdf'}
          />
          <Downloadsec
            sno={'2.'}
            cardheadline={'Dimension Catalog'}
            doclink={'pdf1.pdf'}
          />
          <Downloadsec
            sno={'3.'}
            cardheadline={'Company History'}
            doclink={'pdf1.pdf'}
          />
          <Downloadsec
            sno={'1.'}
            cardheadline={'Product Catalog'}
            doclink={'pdf1.pdf'}
          />
          <Downloadsec
            sno={'2.'}
            cardheadline={'Dimension Catalog'}
            doclink={'pdf1.pdf'}
          />
          <Downloadsec
            sno={'3.'}
            cardheadline={'Company History'}
            doclink={'pdf1.pdf'}
          />
        </div>
      </>
    );
  }
}
