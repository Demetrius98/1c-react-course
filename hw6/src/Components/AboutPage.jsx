import {Component} from "react";
import {Typography} from "antd";

export class AboutPage extends Component {
    render() {
        return (
            <div>
                <Typography.Title>
                    О нас
                </Typography.Title>
                <Typography.Paragraph>
                    Здесь появятся контакты.
                </Typography.Paragraph>
            </div>
        )
    }
}