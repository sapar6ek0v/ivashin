import styled from "styled-components"


export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  transition: all 100ms linear 100ms;
  margin: 20px auto;
  padding: 10px 12px;
  border: solid 1px #6d639a;
  color: #6d639a;
  p {
    word-break: break-all;
    margin-bottom: 0;
  }
  
  input {
    color: #d63f74;
    background: transparent;
    border: 1px solid #d63f74;
    border-radius: 10px;
    padding: 0 10px;
    font-size: 19px;
    width: 100%;
    overflow: auto;
    &:focus, &:active {
      outline: none;
    }
  }
  
  .buttons {
    margin-left: auto;
  }
`

export const Button = styled.button`
  border: solid 1px ${({bg}) => bg};
  padding: 5px 10px;
  background: ${({bg}) => bg};
  cursor: pointer;
  transition: all 100ms linear 80ms;
  color: #fefefe;
  line-height: 1;
  font-size: 16px;
  margin-left: 20px;
  &:focus, &:active {
    outline: none
  }
  &:hover, &:active {
    background: rgba(0,0,0, .7);
  }
`