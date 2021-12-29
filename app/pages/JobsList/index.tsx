import React, {useEffect, useState} from 'react';
import {Container, Header, Title} from './styles';

import api from '@cuteapp/services/api';
import JobCard from '@cuteapp/components/JobCard';

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
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
    </Container>
  );
};

export default JobList;
