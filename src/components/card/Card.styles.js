import styled from "styled-components";
import {FadeIn} from "../common/Common.styles";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin-bottom: 25px;
  color: #333;
  background: white;
  border-radius: 6px;
  //box-shadow: 0 4px 12px rgba(77, 128, 114, 0.3);
  animation: ${FadeIn} 2s forwards;
`;


