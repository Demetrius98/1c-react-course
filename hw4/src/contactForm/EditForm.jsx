import React from "react";
import {EditField} from "./EditField";

export class EditForm extends React.Component {
    render() {
        return (
            <div>
                <EditField name="Ваше имя:     " value={this.props.name} onValueChanged={this.props.onNameValueChanged}/>
                <EditField name="Контакт для связи:     " value={this.props.contact} onValueChanged={this.props.onContactValueChanged}/>
                <button onClick={this.props.onButtonClicked}>Показать введенные данные</button>
            </div>
        )
    }
}