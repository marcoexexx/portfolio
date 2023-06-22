import { Global } from "@emotion/react";

export const GlobalStyle = () => (
  <Global 
    styles={`
      @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700&display=swap');
      html {
        scroll-behavior: smooth;
      }
    `}
  />
)
