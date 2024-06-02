import React, { useEffect, useState } from "react";
import "./styles.css";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(url) {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide == 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide == images.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  console.log(images);

  if (loading) {
    return <div className="mainScreen"> Loading Data, Please Wait!</div>;
  }

  if (errorMsg !== null) {
    return <div className="mainScreen"> Error Occured</div>;
  }

  return (
    <div className="mainScreen">
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      ></BsArrowLeftCircleFill>
      {images && images.length
        ? images.map((imgItem,index) => (
            <img
              src={imgItem.download_url}
              alt={imgItem.download_url}
              key={imgItem.id}
              className={
                currentSlide === index ? "current-image" : "current-image hide-img"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      ></BsArrowRightCircleFill>
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index ? "current-indicator" : "current-indicator hide-ind"
                }
                onClick={()=>setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
    </div>
  );
};

export default ImageSlider;

