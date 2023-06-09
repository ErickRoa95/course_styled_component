import React from 'react';
import  styled  from 'styled-components';
import {colors} from '../utils';

/** Note:
 * ClassNames inside components won't collide with class name globally on the page. 
 */

export const ComplexTitle = ({title}) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div className="underline"></div>
      <h2 className='title'>Global class</h2>
    </Wrapper>
  )
}

// Targetting H1 inside wrapper. 
const Wrapper = styled.div`
  h1{
    text-transform: capitalize;
    text-align: center;
  }
  .underline{
    width: 5rem;
    height: 0.25rem;
    background: ${colors.primary};
    margin: 0 auto;
  }

`;