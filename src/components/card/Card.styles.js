import styled from 'styled-components';
import { FadeIn } from '../common/Common.styles';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin-bottom: 25px;
  color: #333;
  background: white;
  border-radius: 0.75rem;
  font-size: 1rem;
  box-shadow: 0 4px 12px rgba(77, 128, 114, 0.3);
  animation: ${FadeIn} 2s forwards;
  
  @media only screen and (max-width: 1200px) {
      font-size: 0.75rem;
      border-radius: 0.5rem;
  }  
  @media only screen and (max-width: 400px) {
      font-size: 0.7rem;
      border-radius: 0.25rem;
  }
`;
