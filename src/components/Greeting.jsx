import React, { Component } from 'react';

export default class Greeting extends Component {
    
    state = {
        type: this.props.type,
        name: this.props.name
    }

    setType(newType) {
        this.setState({ type: newType })
    }

    setName(newName) {
        this.setState({ name: newName })
    }
    
    render() {
        const { type, name } = this.state;
        return (
            <div>
                <h1>{type}, {name}</h1>
                <hr/>
                <input type="text" placeholder="Tipo..." value={type} onChange={e => this.setType(e.target.value)}/>
                <input type="text" placeholder="Nome..." value={name} onChange={e => this.setName(e.target.value)}/>
            </div>
        );
    }
}
