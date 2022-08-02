import React from 'react';
import IndexPage from '../pages/IndexPage/IndexPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

const routesConfig = [
  {
    path: '/',
    element: <IndexPage />
  },
  {
    path: '*',
    element: <NotFoundPage />
  },
];

export default routesConfig;