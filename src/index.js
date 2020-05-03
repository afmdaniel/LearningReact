import React from 'react';
import ReactDOM from 'react-dom';

import Parent from './components/Parent';
import Child from './components/Child';

ReactDOM.render(
    <div>
        <Parent name="Daniel" lastname="Melo">
            <Child name="Pedro"/>
            <Child name="Simone"/>
            <Child name="João"/>
        </Parent>    
    </div>,
    document.getElementById('root'));