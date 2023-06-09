import styled from 'styled-components';

// Styled HTML component into React Component.
export const DefaultButton = styled.button`
  background:#6411FF;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  padding: 0.25rem;
  display: block;
  width: 200px;
  margin: 1rem auto;
`;

// Styled React Component previously created DefaultButton.
export const HipsterButton = styled(DefaultButton)`
  width:400px;
  background: transparent;
  color: #655cff;
  border: 2px solid #655cff;
  padding: 1rem;
  display: inline-block;
  margin-right: 1rem;

  text-decoration:none;
  text-align: center;
  font-size: 2rem;

`;
