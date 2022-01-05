/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {truncate} from 'lodash';
import {Container, ContainerTags, Tags, Title, DateText} from './styles';
import {Job} from '@cuteapp/screens/JobsList/IJob';
import {View, Linking} from 'react-native';
import {formatDistance, parseISO} from 'date-fns';
import Markdown from 'react-native-showdown';
import {Link} from 'react-router-native';

interface JobCard {
  job: Job;
}

const JobCard = ({job}: JobCard) => {
  const css = `
  h1, h2, h3, h4, h5, h6 {
    font-size: 1em;
  }
  * {
    margin-left: 0px;
    background-color: #091540;
    color: #fff;
    overflow-x: hidden;
    overflow-y: hidden;
    max-width: 100%;
  }
`;
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
      <Link to="/details" state={{job}}>
        <Title>{truncate(job.title, {length: 80})}</Title>
      </Link>
      <View style={{flex: 1}}>
        <Markdown
          onShouldStartLoadWithRequest={event => {
            if (!/^[data:text, about:blank]/.test(event.url)) {
              Linking.openURL(event.url);
              return false;
            }
            return true;
          }}
          markdown={job.body}
          scrollEnabled={false}
          css={css}
        />
      </View>
    </Container>
  );
};

export default JobCard;
