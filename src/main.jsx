import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// variable root that is used to render the single page that all jsx components will be rendered in
// client vs 
import './index.css';
import App from './App.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
