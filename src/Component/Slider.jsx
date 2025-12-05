import React from "react";
import img2 from '../assets/pic2.jpg'
import img3 from '../assets/pic3.jpg'
import img4 from '../assets/pic4.jpg'
const Slider = () => {
  return (
    <div>
      <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                  <h2 className="absolute font-bold top-40 md:text-7xl text-white md:left-60">Find Your Furry Friend Today!</h2>
                    <img
                        src={img2}
                        className="w-full h-[400px]" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                <h2 className="absolute font-bold top-40 md:text-6xl text-white md:left-50">“Adopt, Don’t Shop — Give a Pet a Home.</h2>
                    <img
                        src={img3}
                        className="w-full h-[450px]" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                  <h1 className="absolute font-bold top-40 md:text-6xl text-white md:left-50">Because Every Pet Deserves Love and Care</h1>
                    <img
                        src={img4}
                        className="w-full h-[450px]" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src={img2}
                        className="w-full h-[450px]" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
    </div>
  );
};

export default Slider;
