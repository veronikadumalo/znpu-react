import { useState } from "react";
import styled from "styled-components";
import SliderNavigation from "./SliderNavigation";
import Image from "next/image";

const StyledContainer = styled.div`
  width: 100%;
  height: 700px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 15px;
  @media (max-width: 1250px) {
    height: auto;
  }
`;

const StyledImage = styled(Image)``;

interface ImageSliderProps {
  images: string[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const handleNextClick = () => {
    if (activeImageIndex < images.length) {
      setActiveImageIndex((prev) => prev + 1);
    }
  };

  const handlePrevClick = () => {
    if (activeImageIndex >= 1) {
      setActiveImageIndex((prev) => prev - 1);
    }
  };

  return (
    <StyledContainer>
      <StyledImage src={images[activeImageIndex]} alt="Slider Image" />
      <SliderNavigation
        activeIndex={activeImageIndex}
        pageLength={images.length}
        handleNextClick={handleNextClick}
        handlePrevClick={handlePrevClick}
      />
    </StyledContainer>
  );
};

export default ImageSlider;
