import styled, {keyframes} from 'styled-components'


//Setup ANimations.
const spinner = keyframes`
  to{
    transform: rotate(360deg);
  }
`

const Loading = styled.div`
  width: 6rem;
  height: 6rem;
  border: 5px solid #AAA;
  border-radius: 50%;
  border-top-color: var(--white);
  animation: ${spinner} 0.6s linear infinite;
`

export default Loading;