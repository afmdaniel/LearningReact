import React, { Component } from 'react';

export default class Greeting extends Component {
    constructor(props) {
        super(props)
        
        this.setType = this.setType.bind(this)
        this.setName = this.setName.bind(this)
    }

    state = {
        type: this.props.type,
        name: this.props.name
    }

    setType(event) {
        this.setState({ type: event.target.value })
    }

    setName(event) {
        this.setState({ name: event.target.value })
    }
    
    render() {
        const { type, name } = this.state;
        return (
            <div>
                <h1>{type}, {name}</h1>
                <hr/>
                <input type="text" placeholder="Tipo..." value={type} onChange={this.setType}/>
                <input type="text" placeholder="Nome..." value={name} onChange={this.setName}/>
            </div>
        );
    }
}
