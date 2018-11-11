import ContentLoader from 'react-content-loader'
import styled from 'styled-components'

const ContentLoaderContainer = styled.div`
  width: 200px;
  height: 300px;
`

const Loader = () => (
  <ContentLoaderContainer>
    <ContentLoader width={200} height={300} speed={2} primaryColor="#f3f3f3" secondaryColor="#ecebeb">
      <rect x="0" y="0" rx="3" ry="3" width="200" height="300" />
    </ContentLoader>
  </ContentLoaderContainer>
)

export default Loader
