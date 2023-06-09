import {createGlobalStyle} from 'styled-components';


const GlobalStyles = createGlobalStyle`

:root{
  /* Define css variables */
  --primary: #ce1179;
  --alternative: #cdee11;
  --white: #ffffff;
}

/* Use cc variable:  var(--<name of variable>) */

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(211, 194, 194);
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

.bg-grey{
  background: grey;
}

.title{
  text-transform: uppercase;
  color: red;
}

.btn{
   width: 10rem;
}

`

export default GlobalStyles;