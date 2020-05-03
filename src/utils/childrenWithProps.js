import React from 'react';

/* Clona o elemento passado como fiho e passa para ele as props do pai */
export default function(props) {
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, { ...props, ...child.props });
    });
}