import React from "react";
import GalleryImage1 from "../../assets/gallery-image-1.jpg";
import GalleryImage2 from "../../assets/gallery-image-2.jpg";
import GalleryImage3 from "../../assets/gallery-image-3.jpg";
import GalleryImage4 from "../../assets/gallery-image-4.jpg";
import GalleryImage5 from "../../assets/gallery-image-5.jpg";
import GalleryImage6 from "../../assets/gallery-image-6.jpg";
import "./Gallery.css";

const Gallery = () => {
  return (
    <>
      <div id="gallery" className="gallery-container">
        <h1 className="gallery-heading">GALLERY</h1>
        <p className="gallery-line"></p>
        <div className="gallery-item-container">
          <div className="gallery-item">
            <img src={GalleryImage1} alt="" />
          </div>
          <div className="gallery-item">
            <img src={GalleryImage2} alt="" />
          </div>
          <div className="gallery-item">
            <img src={GalleryImage3} alt="" />
          </div>
          <div className="gallery-item">
            <img src={GalleryImage4} alt="" />
          </div>
          <div className="gallery-item">
            <img src={GalleryImage5} alt="" />
          </div>
          <div className="gallery-item">
            <img src={GalleryImage6} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Gallery;
