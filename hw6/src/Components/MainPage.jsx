import {Component} from "react";
import {Typography} from "antd";

export class MainPage extends Component {
    render() {
        return (
            <div>
                <Typography.Title>
                    Главная
                </Typography.Title>
                <Typography.Paragraph>
                    Здесь будет форма для записи на стирку.
                </Typography.Paragraph>
            </div>
        )
    }
}