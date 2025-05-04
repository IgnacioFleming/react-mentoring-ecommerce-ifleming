import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage } from '../pages/Homepage';
import { MainLayout } from '../layout/MainLayout';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
