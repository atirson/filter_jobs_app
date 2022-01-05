/* eslint-disable react-native/no-inline-styles */
import {Job} from '@cuteapp/screens/JobsList/IJob';
import React from 'react';
import {View, Linking} from 'react-native';
import {Container, ContainerTags, Tags, Title} from './styles';
import Markdown from 'react-native-showdown';
import {Link, useLocation} from 'react-router-native';
import Icon from 'react-native-vector-icons/AntDesign';

const JobDetails = () => {
  const location = useLocation();
  const {job} = location.state as {job: Job};

  const css = `
    h1, h2, h3, h4, h5, h6 {
      font-size: 1em;
    }
    * {
      margin-left: 0px;
      background-color: #091540;
      color: #fff;
      max-width: 100%;
    }
  `;

  return (
    <Container key={job.id}>
      <Link to="/">
        <Icon name="arrowleft" size={24} color="#fff" />
      </Link>
      <ContainerTags>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {job.labels.map(label => (
            <Tags key={label.id} color={`#${label.color}`}>
              {label.name}
            </Tags>
          ))}
        </View>
      </ContainerTags>
      <Title>{job.title}</Title>
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
          css={css}
        />
      </View>
    </Container>
  );
};

export default JobDetails;
