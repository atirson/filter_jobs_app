/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {truncate} from 'lodash';
import {
  Container,
  ContainerTags,
  Tags,
  Title,
  Description,
  DateText,
} from './styles';
import {Job} from '@cuteapp/pages/JobsList/IJob';
import {View} from 'react-native';
import {formatDistance, parseISO} from 'date-fns';

interface JobCard {
  job: Job;
}

const JobCard = ({job}: JobCard) => {
  return (
    <Container key={job.id}>
      <ContainerTags>
        <View style={{flexDirection: 'row'}}>
          {job.labels.slice(0, 3).map(label => (
            <Tags key={label.id} color={`#${label.color}`}>
              {label.name}
            </Tags>
          ))}
        </View>
        <DateText>
          {formatDistance(parseISO(job.updated_at), new Date(), {
            addSuffix: true,
          })}
        </DateText>
      </ContainerTags>
      <Title>{truncate(job.title, {length: 80})}</Title>
      <Description>{truncate(job.body, {length: 120})}</Description>
    </Container>
  );
};

export default JobCard;
