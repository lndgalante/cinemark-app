import { Tab } from 'evergreen-ui';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-gap: 14px;
  grid-auto-flow: column;
  grid-template-columns: min-content min-content;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    position: absolute;
    bottom: 14px;
    width: 100%;
    left: 0;
    max-width: 1280px;
    padding: 0 21px;
  }
`;

const Tags = ({ tags }) => {
  if (!tags) return null;

  return (
    <Wrapper className='tags'>
      {tags.map(({ tag, link }) => (
        <Tab key={tag} isSelected height={40} is='a' href={link} target='_blank'>
          <span>{tag}</span>
        </Tab>
      ))}
    </Wrapper>
  );
};

export default Tags;
