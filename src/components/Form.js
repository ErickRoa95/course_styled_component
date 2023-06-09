import React from 'react'
import styled from 'styled-components'

const Form = () => {
  return (
    <div>
      <StyledForm>
        <h2>Form</h2>
        <div>
          <label>First value:</label>
          <BasicInput />
        </div>
        <div>
          <label>Second value:</label>
          <BasicInput type="password" placeholder="Enter password" />
        </div>
        <SubmitButton>Submit</SubmitButton>
      </StyledForm>
    </div>
  )
}

const StyledForm = styled.form`
  width: 300px;
  background: #fff;
  padding: 2rem;
  margin-top: 1rem;
`;

// Define button with attrs as Submit type to avoid always type the type on the component.
const SubmitButton = styled.button.attrs({
  type: 'submit'
})`
  background:var(--primary);
  border: none;
  color:white;
  padding: 0.25rem;
  cursor: pointer;
  display: block;
  width: 100%;
  margin: 1rem auto;
`
const BasicInput = styled.input.attrs((props) => {
  return {
    type: props.type || 'text',
    placeholder: props.placeholder || 'Please enter value!'
  }
})`
  box-sizing: border-box;
  padding: 0.5rem;
  border: 2px solid #f2f4f8;
  border-radius: 0.25rem;
  width: 100%;
  margin-top:0.25rem;
  margin-bottom:0.25rem;
`

export default Form