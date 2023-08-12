import styled from "styled-components"
import Octicon from 'react-octicon'


const Loading = () => {
  return (
    <LoadingWrapper>
      <Octicon name="mark-github" mega spin/>
    </LoadingWrapper>
  ) 
}

const LoadingWrapper = styled.div`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Loading