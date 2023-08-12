import styled from "styled-components"
import Octicon from 'react-octicon'

const iconMap = {
  files: "code",
  forks: "git-branch",
  comments: "comment",
  stars: "star",
  file: "file"
}

const getLabel = input => input.slice(0,1).toUpperCase() + input.slice(1)

const FeaturesList = ({ featuresList = [] }) => {

  return (
    <FeaturesListWrapper>
      {featuresList.map(
        ({
          featName,
          label = getLabel(featName),
          url = '#',
        }, index) => {
          return (
            <Feature key={`${index}-feature-${label}`} href={url}>
              <Octicon name={iconMap[featName]}/>
              {label}
            </Feature>
          )
        }
      )}
    </FeaturesListWrapper>
  )
}

const FeaturesListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  padding-left: 50px;
  gap: 1.5rem;
`
const Feature = styled.a`
  display: flex;
  align-items: center;
`
export default FeaturesList