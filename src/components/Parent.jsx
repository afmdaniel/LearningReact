import React from 'react';
import childrenWithProps from '../utils/childrenWithProps'

export default props => 
<div>
    <h1>{props.name} {props.lastname}</h1>
    <h2>Children</h2>
    <ul>
        {/* {props.children} */}
        { childrenWithProps(props) }    
    </ul>
</div>