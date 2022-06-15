import React from 'react';
import ReactDOM from 'react-dom/client';
import { Page } from './templates/Page';

const root = document.getElementById('root');
if (root) {
    ReactDOM.createRoot(root).render(
        <React.StrictMode>
            <Page />
        </React.StrictMode>,
    );
}
