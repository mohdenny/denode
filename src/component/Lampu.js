import React from 'react';

class Lampu extends React.Component {
    constructor(){
        super();
        this.state = {
            value : true,
            text : "nyala"
        }
        
    }

    onchange = () => {
        this.setState({text : "mati"})
    }

    render(){
        return (
            <div>
                <h1>{this.state.text}</h1>
                <button type="button" onClick={this.onchange} >OK</button>
            </div>
        )
    }
}

export default Lampu;