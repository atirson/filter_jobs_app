import api from '@cuteapp/services/api';
import React, {useEffect, useState} from 'react';
import {Container, Header, Title} from './styles';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    api
      .get('/repos/backend-br/vagas')
      .then(res => {
        setJobs(res.data);
      })
      .catch(error => {
        console.log('Error', error);
      });
  }, []);

  return (
    <Container>
      <Header>
        <Title>Job Listing</Title>
      </Header>
    </Container>
  );
};

export default JobList;
