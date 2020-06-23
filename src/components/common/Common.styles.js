import styled, { keyframes } from 'styled-components';

export const Label = styled.label`
  padding-top: ${(props) => props.paddingTop || '0.5rem'};
  padding-bottom: ${(props) => props.paddingBottom || '0.5rem'};
  font-weight: ${(props) => props.fontWeight};
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => props.flexDirection || 'row'};
  min-width: 75%;
`;

export const FadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

export const GridView = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 20vw);
  grid-template-rows: repeat(4, auto);
  grid-gap: 0.75rem;
  justify-content: center;
  
  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 30vw);
    grid-template-rows: repeat(3, auto);
    grid-gap: 0.5rem;
  }  
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 45vw);
    grid-template-rows: repeat(2, auto);
    grid-gap: 0.25rem;
  }
  @media only screen and (max-width: 400px) {
    grid-template-columns: repeat(1, 90vw);
    grid-template-rows: repeat(2, auto);
    grid-gap: 0.25rem;
  }
`;
