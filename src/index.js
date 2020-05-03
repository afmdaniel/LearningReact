import React from 'react';
import ReactDOM from 'react-dom';

import Greeting from './components/Greeting'

ReactDOM.render(
    <div>
        <Greeting type="Boa noite" name="João" />
    </div>,
    document.getElementById('root'));