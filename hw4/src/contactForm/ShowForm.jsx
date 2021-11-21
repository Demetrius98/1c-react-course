import React from "react";

export class ShowForm extends React.Component {
    render() {
        return (
            <div>
                { this.props.displayData &&
                    <div>
                        <p>Ваше имя: {this.props.name}</p>
                        <p>Ваш контакт для связи: {this.props.contact}</p>
                    </div>
                }
            </div>
        )
    }
}