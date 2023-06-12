import React from 'react'
import GlobalStyles from '../global-styles';
import Loading from '../components/Loading';

const LoadingExample = props => {
  return (
    <div style={{padding: '2rem'}}>
      <GlobalStyles/>
      <br></br>
      <Loading />
   </div>
  )
}

export default LoadingExample