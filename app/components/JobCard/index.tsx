import React from 'react';
import {truncate} from 'lodash';
import {Container, ContainerTags, Tags, Title, Description} from './styles';

const JobCard = () => {
  return (
    <Container>
      <ContainerTags>
        <Tags color="#ff0000">Frontend</Tags>
        <Tags color="#ff0000">Frontend</Tags>
      </ContainerTags>
      <Title>
        {truncate('Developer Front-end - ReactJS - Angular', {length: 30})}
      </Title>
      <Description>
        {truncate(
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget
          `,
          {
            length: 150,
          },
        )}
      </Description>
    </Container>
  );
};

export default JobCard;
