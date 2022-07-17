import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { SpeechProvider } from '@speechly/react-client';
import { Provider } from './context/context';


ReactDOM.render(<SpeechProvider appId="acf4cc8a-d5d6-4d2a-a619-82162b079a81" language="en-US">
    <Provider>
        <App />
    </Provider>
</SpeechProvider>, document.getElementById('root'));