import React from "react";

export class EditField extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.props.onValueChanged(e.target.value)
    }

    render() {
        return (
            <div>
                <h7>{this.props.name}</h7>
                <input value={this.props.value} onChange={this.handleChange} />
            </div>
        )
    }
}