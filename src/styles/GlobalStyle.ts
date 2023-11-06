import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
  --primary:#9e0032;
  --secondary: rgba(179, 0, 32, 0.85);
  --white: #fff;
  --black:#000;
  --light-text: rgba(255, 255, 255, 0.8);
  --secondary-light-text: rgba(255,255,255,0.6);
  --dark-text: 	 #660020;
  --grey: #A4A0A0;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html{
  height: -webkit-fill-available; 
}

html,
body, button {
  font-family: "Merriweather", serif;
  margin: 0;
  padding: 0;
}
input,
label,
button {
}
body {
  background: var(--white);
  color: var(--black);
  
}
#root{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
}

ul {
  list-style: none;
}
#__next {
  min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
}

`;

export default GlobalStyle;
