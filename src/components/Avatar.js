import styled from "styled-components"

const Avatar = ({ avatar, alt="avatar" }) => {
  return <AvatarContainer src={avatar} alt={alt}/>
}

const AvatarContainer = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px
`

export default Avatar