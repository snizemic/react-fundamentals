import React, { Component } from 'react';

class Repos extends Component {
    render() {
        return (
            <div>
                <h2>Repo – {this.props.params.userName}</h2>
                <p>{this.props.params.repoName}</p>
            </div>
        );
    }
}

export default Repos;