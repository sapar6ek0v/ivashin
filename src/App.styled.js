import styled, {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
`

export const Wrapper = styled.div`
  body {
    font-family: 'Arial', sans-serif;
    font-weight: bold;
    background: #fefefe;
    line-height: 1.5
  }
  
  display: flex;
  flex-direction: column;
  height: 100vh;
  
  .main {
    flex: 1;
  }
`