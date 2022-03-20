import styled from "styled-components"

export const Wrapper = styled.div`
  padding: 100px 0 ;

  .container {
    max-width: 1140px;
    margin: 0 auto;
  }
  
  .center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  h2 {
    color: #333;
    margin-bottom: 30px
  }
  
  h3 {
    padding: 7px;
    text-align: left;
    color: rgba(0,0,0, .5);
  }
  
  .main {
    &_input {
      background: transparent;
      border: solid 1px #d63f74;
      padding: 7px 10px;
      width: 100%;
      color: #333;
      &:focus, &:active{
        outline: none
      }
    }
    
    &_btn {
      border: solid 1px #d63f74;
      padding: 2px 10px;
      background: #d63f74;
      cursor: pointer;
      transition: all 100ms linear 80ms;
      color: #fefefe;
      line-height: 1;
      font-size: 17px; 
      &:focus, &:active {
        outline: none
      }
      &:hover, &:active {
        background: #882849 
      }
      &:disabled {
        background: red;
      }
    }
    
    &_select {
      padding: 7px;
      margin-right: 20px;
      border: 1px solid #6d639a;
      color: #453e61;
      &:focus, &:active {
        outline: none
      }
    }
  }
`