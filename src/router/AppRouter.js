import React from 'react';
import { Routes, Route } from 'react-router-dom';

import DigitalAnalytics from '../pages/DigitalAnalytics';
import AMLBanking from '../pages/AMLBanking';
import SpecialtyPharma from '../pages/SpecialtyPharma';
import DigitalMarketing from '../pages/DigitalMarketing';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<DigitalAnalytics />} />
      <Route path="/aml-banking" element={<AMLBanking />} />
      <Route path="/specialty-pharma" element={<SpecialtyPharma />} />
      <Route path="/digital-marketing" element={<DigitalMarketing />} />
    </Routes>
  );
};

export default AppRouter;
