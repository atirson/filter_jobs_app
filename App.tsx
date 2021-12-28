import React from 'react';
import {NativeRouter, Route, Routes} from 'react-router-native';

import JobList from '@cuteapp/pages/JobsList';

const App = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<JobList />} />
      </Routes>
    </NativeRouter>
  );
};

export default App;
