import styled from "styled-components";

export const AppWrapper = styled.div`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(13, 12, 61, 1) 13%,
    rgba(21, 21, 81, 0.9347494746861833) 44%
  );
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100vh;
  //@media (max-width: 576px) {
  //  flex-direction: column;
  //}
`;

export const SearchBox = styled.input`
  color: #333;
  background: white;
  height: 70px;
  padding: 0 25px;
  font-size: 1em;
  border-radius: 6px;
  margin-bottom: 2rem;
  margin-top: 2rem;
  box-shadow: 0 4px 12px rgba(77, 128, 114, 0.3);
`;

export const SearchWrapper = styled.div`
  height: 70px;
  padding: 0 25px;
  font-family: inherit;
  font-size: 1em;
  font-weight: 300;
  color: inherit;
  border: none;
  background: transparent;
`;
