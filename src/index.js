import { createRoot } from 'react-dom/client';

import './index.scss';
import App from './components/App';

const rootDOMElement = document.getElementById('app');
const root = createRoot(rootDOMElement);
root.render(<App />);