import React, { Component } from 'react';

class Repos extends Component {
    render() {
        return (
            <div>
                <h2>Repo – <span style={{textTransform: "capitalize"}}>{this.props.params.userName}</span></h2>
                <p>{this.props.params.repoName}</p>
            </div>
        );
    }
}

export default Repos;