import React from "react";
import {EditForm} from "./EditForm";
import {ShowForm} from "./ShowForm"

export class Form extends React.Component {
    constructor(props) {
        super(props)
        this.handleNameValueChange = this.handleNameValueChange.bind(this)
        this.handleContactValueChange = this.handleContactValueChange.bind(this)
        this.onButtonClicked = this.onButtonClicked.bind(this)
        this.state = {name: '', contact: '', viewData: false}
    }

    handleNameValueChange(name) {
        this.setState({name: name})
    }

    handleContactValueChange(contact) {
        this.setState({contact: contact})
    }

    onButtonClicked() {
        this.setState({viewData: true})
    }

    render() {
        return (
            <div>
                <EditForm
                    name={this.state.name}
                    contact={this.state.contact}
                    onNameValueChanged={this.handleNameValueChange}
                    onContactValueChanged={this.handleContactValueChange}
                    onButtonClicked={this.onButtonClicked}/>
                <ShowForm
                    name={this.state.name}
                    contact={this.state.contact}
                    displayData={this.state.viewData}/>
            </div>
        )
    }
}