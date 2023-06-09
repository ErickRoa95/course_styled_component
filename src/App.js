import {useState} from 'react';

import styled, {ThemeProvider} from 'styled-components';
import BasicTitle from './components/BasicTitle';
import {DefaultButton, HipsterButton} from './components/Buttons';
import { ComplexTitle } from './components/ComplexTitle';
import AlternativeTitle from './components/AlternativeTitle';
import Card from './components/Card';
import Form from './components/Form';
import List from './components/List'
import Products from './components/Products'

import Loading from './components/Loading'

import GlobalStyles from './global-styles';

const BaseTheme = {
  color: '#222',
  background: '#fff'
}

const DarkTheme = {
  color: '#fff',
  background: '#222'
}

const Container = styled.div`
  padding: 2rem;
  color: ${(props) => props.theme.color} ;
  background: ${(props) => props.theme.background} ;
`

function App() {

  const [baseTheme, setTheme] = useState(true);

  const toggleTheme = () =>{
    console.log('click');
    setTheme(!baseTheme);
  };

  return (
    <div style={{padding: '2rem'}}>
      <GlobalStyles/>
      
      <BasicTitle special>Styled Component Title. </BasicTitle>
      <BasicTitle>Styled Component Title. </BasicTitle>

      <DefaultButton>Click me !</DefaultButton>    
      <HipsterButton>Click me !</HipsterButton>
      <hr></hr>
      <br></br>
      <ComplexTitle title="Complex Title"></ComplexTitle>
      <AlternativeTitle title="Alternative Title"></AlternativeTitle>
      <hr></hr>
      <br></br>
      <Card></Card>
      <hr></hr>
      <br></br>
      <ThemeProvider theme={baseTheme ? BaseTheme : DarkTheme}>
        <Container>
          <h1>Hello World</h1>
          <button className='btn' onClick ={toggleTheme}>
            Click me !
          </button>
        </Container>
      </ThemeProvider>
      <hr></hr>
      <br></br>
      <Loading></Loading>
      <hr></hr>
      <br></br>
      <HipsterButton as="a" href='https://www.google.com.mx'>
        CLICK ME
      </HipsterButton>
      <hr></hr>
      <br></br>
      <Form></Form>
      <hr></hr>
      <br></br>
      <h2>Simple List</h2>
      <List />
      <hr></hr>
      <br></br>
      <Products/>
    </div>
  );
}

export default App;
