import React from 'react'
import {DefaultButton, HipsterButton} from '../components/Buttons';
import BasicTitle from '../components/BasicTitle';
import GlobalStyles from '../global-styles';

const BasicExample = () => {
  return (
    <div style={{padding: '2rem'}}>
      <GlobalStyles/>
      
      <BasicTitle special>Styled Component Title. </BasicTitle>
      <BasicTitle>Styled Component Title. </BasicTitle>

      <DefaultButton>Click me !</DefaultButton>    
      <HipsterButton>Click me !</HipsterButton>
      <hr></hr>
    </div>
  )
}

export default BasicExample;