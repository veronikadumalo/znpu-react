import { useBodyScrollLock } from "../hooks/useBodyScrollLock";
import styled from "styled-components/macro";

const StyledOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9998;
`;

export const Overlay = () => {
  useBodyScrollLock();
  return <StyledOverlay />;
};
