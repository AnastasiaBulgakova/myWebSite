import React from 'react';
import ReactDOM from 'react-dom/client';

import './i18n';

import 'antd/dist/reset.css';
import './app/assets/index.css';
import './app/assets/normalize.css';
import App from './app/App';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
