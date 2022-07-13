import "./gallery.css";
import Scroll from ".././components/scroll/Scroll"
import { useState } from "react";
export default function Gallery() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://ewh.ieee.org/r10/calcutta/images/PhotoGallery/online2021/CVR2.jpg",
    },
    {
      src: "https://ewh.ieee.org/r10/calcutta/images/PhotoGallery/online2021/KR1.jpg",
    },
    {
      src: "https://ewh.ieee.org/r10/calcutta/images/PhotoGallery/calcon2020/DSC_0601.jpg",
    },
    {
      src: "https://ewh.ieee.org/r10/calcutta/images/PhotoGallery/calcon2020/IMG2020.jpg",
    },
    {
      src: "https://ewh.ieee.org/r10/calcutta/images/PhotoGallery/calcon2020/IMGL6586.jpg",
    },
    {
      src: "https://ewh.ieee.org/r10/calcutta/images/PhotoGallery/tensymp2019/IMGL6615.jpg",
    },
    {
      src: "https://ewh.ieee.org/r10/calcutta/images/PhotoGallery/tensymp2019/IMGL6939.jpg",
    },
    {
      src: "https://ewh.ieee.org/r10/calcutta/images/PhotoGallery/tensymp2019/IMGL6945.jpg",
    },
    {
      src: "https://ewh.ieee.org/r10/calcutta/images/PhotoGallery/tensymp2019/IMGL6951.jpg",
    },
    {
      src: "https://ewh.ieee.org/r10/calcutta/images/PhotoGallery/tensymp2019/IMGL6615.jpg",
    },
    {
      src: "https://ewh.ieee.org/r10/calcutta/images/PhotoGallery/tensymp2019/IMGL6939.jpg",
    },
    {
      src: "https://ewh.ieee.org/r10/calcutta/images/PhotoGallery/tensymp2019/IMGL6945.jpg",
    },
    {
      src: "https://ewh.ieee.org/r10/calcutta/images/PhotoGallery/tensymp2019/IMGL6951.jpg",
    },
    {
      src: "https://ewh.ieee.org/r10/calcutta/images/PhotoGallery/online2021/KR1.jpg",
    },
    {
      src: "https://ewh.ieee.org/r10/calcutta/images/PhotoGallery/calcon2020/DSC_0601.jpg",
    },
    {
      src: "https://ewh.ieee.org/r10/calcutta/images/PhotoGallery/calcon2020/IMG2020.jpg",
    },
    {
      src: "https://ewh.ieee.org/r10/calcutta/images/PhotoGallery/calcon2020/IMGL6586.jpg",
    },
    {
      src: "https://ewh.ieee.org/r10/calcutta/images/PhotoGallery/tensymp2019/IMGL6615.jpg",
    },
    {
      src: "https://ewh.ieee.org/r10/calcutta/images/PhotoGallery/tensymp2019/IMGL6939.jpg",
    },
    {
      src: "https://ewh.ieee.org/r10/calcutta/images/PhotoGallery/tensymp2019/IMGL6945.jpg",
    },
    {
      src: "https://ewh.ieee.org/r10/calcutta/images/PhotoGallery/tensymp2019/IMGL6951.jpg",
    },
    {
      src: "https://ewh.ieee.org/r10/calcutta/images/PhotoGallery/tensymp2019/IMGL6615.jpg",
    },
    {
      src: "https://ewh.ieee.org/r10/calcutta/images/PhotoGallery/tensymp2019/IMGL6939.jpg",
    },
    {
      src: "https://ewh.ieee.org/r10/calcutta/images/PhotoGallery/tensymp2019/IMGL6945.jpg",
    },
    {
      src: "https://ewh.ieee.org/r10/calcutta/images/PhotoGallery/tensymp2019/IMGL6951.jpg",
    },
  ];
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;
  
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 24 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 24 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div className="gallery-container">
      {open && (
        <div className="slider">
          <i
            className="fa-solid fa-circle-xmark close"
            onClick={() => setOpen(false)}
          ></i>
          <i
            className="fa-solid fa-arrow-left arrow"
            onClick={() => handleMove("l")}
          ></i>
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <i
            className="fa-solid fa-arrow-right arrow"
            onClick={() => handleMove("r")}
          ></i>
        </div>
      )}
      <h1 className="gallery-head">Gallery</h1>
      <hr className="line"></hr>
      <div className="gallery-images-wrapper">
        {photos.map((photo, i) => (
          <div className="gallery-image-wrapper">
            <img
              onClick={() => handleOpen(i)}
              src={photo.src}
              className="gallery-image"
              alt="img"
            />
          </div>
        ))}
      </div>
      <Scroll />
    </div>
  );
}
