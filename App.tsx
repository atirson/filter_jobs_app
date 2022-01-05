import React from 'react';
import {NativeRouter, Route, Routes} from 'react-router-native';

import JobList from '@cuteapp/screens/JobsList';
import JobDetails from '@cuteapp/screens/JobDetails';

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
