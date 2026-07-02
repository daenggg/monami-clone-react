import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '../pages/Main/MainPage';
import { DetailPage } from '../pages/Detail/DetailPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/detail/:productId',
    element: <DetailPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  }
], {
  future: {
    v7_relativeSplatPath: true,
  }
});
