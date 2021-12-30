/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Container, Header, Title} from './styles';

import api from '@cuteapp/services/api';
import JobCard from '@cuteapp/components/JobCard';
import {FlatList} from 'react-native';
import {Job} from './IJob';
import Loading from '@cuteapp/components/Loading';

const JobList = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadJobs();
  }, []);

  async function loadJobs(): Promise<void> {
    // eslint-disable-next-line curly
    if (loading) return;
    setLoading(true);

    const response = await api.get(
      `/repos/backend-br/vagas/issues?per_page=10&page=${page}`,
    );

    setJobs([...jobs, ...response.data]);
    setPage(page + 1);
    setLoading(false);
  }

  return (
    <Container>
      <Header>
        <Title>Job Listing</Title>
      </Header>
      <FlatList
        style={{marginBottom: 80}}
        data={jobs}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <JobCard job={item} />}
        onEndReached={loadJobs}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<Loading loading={loading} />}
      />
    </Container>
  );
};

export default JobList;
