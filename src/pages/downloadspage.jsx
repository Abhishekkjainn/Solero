import '../App.css';
import { Helmet } from 'react-helmet';
export default function DownloadsPage() {
  return (
    <>
      <Helmet>
        <title>Download Center | Solero Ceramics</title>
      </Helmet>
      <div className="downloadpage">
        <div className="downloadpage1">
          <div className="companypageheadingpage1">
            {' '}
            <div className="circle comppagewhitecircle"></div> &nbsp; DOWNLOADS
          </div>
        </div>
      </div>
    </>
  );
}
