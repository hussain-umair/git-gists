import React from 'react'
import styled from 'styled-components'

import Gist from './Gist'


const GistList = ({ gists }) => {

  return (
    <GistListWrapper>
      {gists.map((gist, index) => (
        <GistWrapper key={index}>
          <Gist gist={gist} />
        </GistWrapper>
      ))}
    </GistListWrapper>
  )
}

const GistListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const GistWrapper = styled.div`
  width: 60%;
  padding-top: 20px;
  padding-bottom: 50px;
  border-bottom: 1px solid lightGray;
  @media (max-width: 770px) {
    width: 80%;
  }
  @media (max-width: 550px) {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
`
export default GistList
