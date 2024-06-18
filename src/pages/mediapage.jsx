import '../App.css';
export default function MediaPage() {
  return (
    <div className="mediapage">
      <Mediapage1 />
      <Mediapage2 />
    </div>
  );

  function Mediapage1() {
    return (
      <div className="mediapage1">
        <div className="companypageheadingpage1">
          {' '}
          <div className="circle comppagewhitecircle"></div> &nbsp; Gallery
        </div>
      </div>
    );
  }

  function Mediapage2() {
    return <div className="mediapage2"></div>;
  }
}
