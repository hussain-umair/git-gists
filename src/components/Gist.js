import { useMemo } from 'react'
import styled from "styled-components"
import Avatar from "./Avatar"
import FeaturesList from './FeaturesList'
import { dateFormatter } from '../utils'


const Gist = ({ gist }) => {
  const { 
    owner: { 
      id,
      avatar_url: avatarUrl, 
      login: userName, 
      html_url: userProfile,
    },
    forks_url: forksUrl,
    comments_url: commentsUrl,
    description,
    created_at: createdAt,
    updated_at: updatedAt,
    files,
  } = gist

  const filesArr= useMemo(
    () => 
      Object.values(files)
      .map(({ filename, raw_url: url }) => 
        ({ 
          featName: 'file',
          label: filename,
          url,
        })
      ), [files])

  const featArr = useMemo(() => [
    { featName: 'files', label: `${filesArr.length} Files` },
    { featName: 'forks', url: forksUrl },
    { featName: 'comments', url: commentsUrl },
    { featName: 'stars' },
  ], [filesArr, forksUrl, commentsUrl])

  return (
    <>
      <GistHeader>
        <AvatarWrapper>
          <Avatar avatar={avatarUrl} alt={userName}/>
          <a href={userProfile}>{userName}</a>
        </AvatarWrapper>
        <FeaturesList featuresList={featArr} />
      </GistHeader>
      
      <DatesWrapper>
        <p>Created at: {dateFormatter(createdAt)}</p>
        <p>Last updated: {dateFormatter(updatedAt)}</p>
      </DatesWrapper>

      <Description>{description}</Description>

      <FeaturesList featuresList={filesArr} />
    </>
  )
}

const GistHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media
`
const AvatarWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`
const DatesWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`
const Description = styled.p`
  font-size: 1.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`


export default Gist
