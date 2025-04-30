import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { MainRoutes } from './app';

import 'antd/dist/reset.css';
// import './app/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={MainRoutes} />
);
