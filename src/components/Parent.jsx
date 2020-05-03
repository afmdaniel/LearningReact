import React from 'react';
import Child from './Child';

export default props => 
<div>
    <h1>{props.name} {props.lastname}</h1>
    <h2>Children</h2>
    <ul>
        <Child name="João" lastname={props.lastname} />
        <Child {...props} />
        <Child {...props} name="Simone" />
    </ul>
</div>