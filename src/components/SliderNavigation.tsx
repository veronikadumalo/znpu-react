import styled from "styled-components/macro";
import chevronLeftGrey from "../assets/images/chevron-left-grey.png";
import chevronRightGrey from "../assets/images/chevron-right-grey.png";
import chevronLeft from "../assets/images/chevron-left.png";
import chevronRight from "../assets/images/chevron-right.png";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const StyledPageNumber = styled.p`
  width: 100px;
  text-align: center;
  letter-spacing: 1.5px;
`;

interface SliderNavigationProps {
  activeIndex: number;
  handleNextClick: () => void;
  handlePrevClick: () => void;
  pageLength: number | null;
}

const SliderNavigation = ({
  activeIndex,
  handleNextClick,
  handlePrevClick,
  pageLength,
}: SliderNavigationProps) => {
  return (
    <StyledContainer>
      <StyledButton onClick={handlePrevClick} disabled={activeIndex === 1}>
        <img
          src={activeIndex === 1 ? chevronLeftGrey : chevronLeft}
          alt="Chevron Left"
          width={20}
          height={20}
        />
      </StyledButton>
      <StyledPageNumber>
        <strong>{activeIndex}</strong>
        {pageLength && (
          <>
            {` `}z <strong>{pageLength}</strong>
          </>
        )}
      </StyledPageNumber>
      <StyledButton
        onClick={handleNextClick}
        disabled={activeIndex === pageLength}
      >
        <img
          src={activeIndex === pageLength ? chevronRightGrey : chevronRight}
          alt="Chevron Right"
          width={20}
          height={20}
        />
      </StyledButton>
    </StyledContainer>
  );
};

export default SliderNavigation;
