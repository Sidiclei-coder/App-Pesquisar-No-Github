import styled from "styled-components";

export const text = styled.label`
  height: 1.3rem;
  width: 10rem;
  margin: .2rem auto;
  text-align: center;
  border: rgb(179, 178, 178) 1px solid;
  background-color: grey;
  color: #fff;
  border-radius: .25rem 0 .25rem 0;
  
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Content = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  `;

export const Input = styled.input`
  height: 1.40rem;
  border: 1px solid #ddd;
  padding: 0 .5rem;
  border-radius: .25rem 0 0 0;
  
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const Button = styled.button`
  height: 1.5rem;
  border: rgb(179, 178, 178) 1px solid;
  background: grey;
  color: #fff;
  border-radius: 0 0 .25rem 0;
  
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const ErrorMsg = styled.span`
  display: block;
  font-size: 0.65rem;
  color: red;
  font-weight: 600;
  margin-top: 1rem;
`;