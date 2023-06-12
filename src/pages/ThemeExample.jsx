import {useState} from 'react';
import GlobalStyles from '../global-styles';
import styled, {ThemeProvider} from 'styled-components';

// Setup styles for Dark light theme.
const BaseTheme = {
  color: '#222',
  background: '#fff'
}

const DarkTheme = {
  color: '#fff',
  background: '#222'
}

// Container component. 
const Container = styled.div`
  padding: 2rem;
  color: ${(props) => props.theme.color} ;
  background: ${(props) => props.theme.background} ;
`


function ThemeExample (props){
  // Hooks used to toggle the states. 
  const [baseTheme, setTheme] = useState(true);

  const toggleTheme = () =>{
    console.log('click');
    setTheme(!baseTheme);
  };

  return (
    <div style={{padding: '2rem'}}>
      <GlobalStyles/>
      
      <ThemeProvider theme={baseTheme ? BaseTheme : DarkTheme}>
        <Container>
          <h1>Hello World</h1>
          <button className='btn' onClick ={toggleTheme}>
            Click me !
          </button>
        </Container>
      </ThemeProvider>
      <hr></hr>
    </div>
  )
}


export default ThemeExample