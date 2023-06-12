import React from 'react';
import Form from "../components/Form";

import GlobalStyles from '../global-styles';

const FormExample = props => {
  return (
    <div style={{padding: '2rem'}}>
      <GlobalStyles />

      <h2>Simple form</h2>
      <Form />  
    </div>
  )
}

export default FormExample