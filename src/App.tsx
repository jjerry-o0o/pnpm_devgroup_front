import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AppHeader, AppFooter } from '@/components';
import { Main, DetailInfo, Explorer } from '@/pages';

const App = () => {
  const toggleDark = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="page">
      <BrowserRouter>
        <AppHeader toggleDark={toggleDark} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/page/info/:id" element={<DetailInfo />} />
          <Route path="/page/explorer" element={<Explorer />} />
        </Routes>
        <AppFooter />
      </BrowserRouter>
    </div>
  );
};

export { App };
