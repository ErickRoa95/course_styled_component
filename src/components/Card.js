import React from 'react'
import styled from 'styled-components'

const Card = () => {
  return (
    <StyledCard>
      <img 
        src="https://img.pokemondb.net/sprites/x-y/normal/venusaur-f.png" 
        alt="Venusaur" />
      <footer>
        <h4>Product name</h4>
        <p>$15</p>
      </footer>
    </StyledCard>
  );
}

const StyledCard = styled.article`
  width: 35vw;
  max-width:300px;
  background: var(--white);
  border-radius: 0.25rem;
  img{
    width:90%;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;

  }
  footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 2rem;
    h4{
      text-transform:capitalize;
      color:red;
    }
    h4:hover{
      color: green;
    }
    p{
      color: var(--primary);
      font-weight: 700;
    }
  }
  /** Hover the whole component or the component itselfs with & */
  transition: all 0.5s ease-in-out;
  &:hover{
    box-shadow: 0 3px 3px #222;
    cursor: pointer;
  }

  @media (min-width:768px){
    max-width: 600px;
  }
`;

export default Card;