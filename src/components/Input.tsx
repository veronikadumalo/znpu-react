import styled from "styled-components";

interface InputProps {
  label?: string;
  inputId: string;
  inputType?: string;
}

const StyledInputContainer = styled.div``;
const StyledLabel = styled.label``;
const StyledInput = styled.input``;

export const Input = ({ label, inputId, inputType = "text" }: InputProps) => {
  return (
    <StyledInputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput id={inputId} type={inputType} />
    </StyledInputContainer>
  );
};
