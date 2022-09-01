import React, { Component } from "react";
import './UserOutput.css'

class UserOutput extends Component {
    render() {
        return (
            <div className="UserOutput">
                <p>{this.props.name}</p>
                <p>and this is the second.</p>
            </div>
        )
    }
}

export default UserOutput;