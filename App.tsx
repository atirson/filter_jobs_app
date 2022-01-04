import React from 'react';
import {NativeRouter, Route, Routes} from 'react-router-native';

import JobList from '@cuteapp/pages/JobsList';
import JobDetails from '@cuteapp/pages/JobDetails';

const App = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/details" element={<JobDetails />} />
      </Routes>
    </NativeRouter>
  );
};

export default App;
