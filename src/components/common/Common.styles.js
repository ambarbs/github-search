import styled, { keyframes } from "styled-components";

export const Label = styled.label`
  padding-top: ${(props) => props.paddingTop || "0.5rem"};
  padding-bottom: ${(props) => props.paddingBottom || "0.5rem"};
  font-weight: ${props => props.fontWeight};
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => props.flexDirection || "row"};
  min-width: 75%;
`;

export const FadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;
