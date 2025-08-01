import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage } from '../pages/Homepage';
import { MainLayout } from '../layout/MainLayout';
import { NotFound } from '../pages/NotFound';
import { Shop } from '../pages/Shop';
import { MyAccount } from '../pages/MyAccount';
import { Category } from '../pages/Category';
import { ProductDetailSection } from '../pages/ProductDetailSection/ProductDetailSection';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/category/:category" element={<Category />} />
          <Route path="/product/:id" element={<ProductDetailSection />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
