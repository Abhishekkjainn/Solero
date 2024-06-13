import React from 'react';
import '../App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Page1(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="page1">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={false}
        customTransition="transform 1s ease"
        transitionDuration={2500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}
        deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="carousel1">
          <div className="carouseltext">
            <div className="headercarousel">Italian style that inspires</div>
            <div className="subheadcarousel">
              Discover all Solero products for wall, floor and worktops
            </div>
            <div className="infobutton">Find More Info</div>
          </div>
        </div>
        <div className="carousel2">
          <div className="carouseltext">
            <div className="headercarousel">Innovative surfaces</div>
            <div className="subheadcarousel">
              3D texture technology – Red Dot Design Award winner
            </div>
            <div className="infobutton">Find More Info</div>
          </div>
        </div>
        <div className="carousel3">
          <div className="carouseltext">
            <div className="headercarousel">Tailor made solutions</div>
            <div className="subheadcarousel">
              Added values service for your project’s needs
            </div>
            <div className="infobutton">Find More Info</div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
