import React from 'react';
import ReactDOM from 'react-dom';

import { GoodAfternoon, GoodEvening } from './components/Multiples'

ReactDOM.render(
    <div>
        <GoodAfternoon name="Daniel"/>
        <GoodEvening name="Simone"/>
    </div>,
    document.getElementById('root'));