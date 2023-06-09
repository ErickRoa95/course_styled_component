import React from 'react'
import  styled  from 'styled-components'
import {colors, setupBorder } from '../utils.js';

/** Note:
 * ClassNames inside components won't collide with class name globally on the page. 
 */

export const ComplexTitle = ({title, className}) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <div className="underline"></div>
      <div className="box"></div>
      <div className="boxSetup"></div>
    </div>
  )
}

// Targetting H1 inside wrapper. 
const AlternativeTitle = styled(ComplexTitle)`
  h1{
    text-transform: capitalize;
    text-align: center;
  }
  .underline{
    width: 8rem;
    height: 0.75rem;
    background: ${colors.alternative};
    margin: 0 auto;
  }
  .box{
    margin: 1rem auto;
    height: 5px;
    border: 2px solid red;
  }
  // Class where we test function setup for border. 
  .boxSetup{
    margin: 1rem auto;
    height: 5px; 
    border: ${setupBorder({width:5, type:'solid', color: 'green'})};
  }
`;

export default AlternativeTitle;