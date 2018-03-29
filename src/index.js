import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CvApp from './CvApp/CvApp.jsx';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<CvApp />, document.getElementById('root'));
registerServiceWorker();
