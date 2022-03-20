import styled from "styled-components"

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  min-height: 10%;
  height: 10vh;
  background: #d63f74;
  
  .container {
    max-width: 1140px;
    margin: 0 auto;
  }

  
  button {
    margin: 12px 0;
    border: solid 1px #6d639a;
    color: white;
    background: #6d639a;
    font-size: 16px;
    padding: 5px 10px;
    transition: all 100ms linear 80ms;

    &:focus, &:active {
      outline: none
    }
    &:hover, &:active {
      background: #37314e
    }
  }
`