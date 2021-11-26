import {Component} from "react";
import {Typography, Form, Input, Button, DatePicker} from "antd";
import moment from 'moment';

function range(start, finish) {
    const resArr = [];
    for (let i = start; i < finish; i++) {
        resArr.push(i);
    }
    return resArr;
}

export class MainPage extends Component {
    constructor(props) {
        super(props);
        this.onFinish = this.onFinish.bind(this)
        this.onFinishFailed = this.onFinishFailed.bind(this)

        this.state = {
            isViewOkAnswer: false,
            date: ""
        }
    }

    onFinishFailed(errorInfo) {
        this.setState({isViewOkAnswer: false})
    }

    onFinish(values) {
        this.setState({
            isViewOkAnswer: true,
            date: values.date.format("dddd, MMMM Do YYYY, h:mm a")
        })
    }

    disabledDate(current) {
        return current < moment().startOf('day');
    }

    disabledDateTime() {
        return {
            disabledMinutes: () => {
                let disabledMinutes = range(0, 60)
                disabledMinutes.splice(30, 1)
                disabledMinutes.splice(0, 1)
                return disabledMinutes
            },
            disabledSeconds: () => range(0, 60),
        };
    }

    render() {
        return (
            <div>
                <Typography.Title>
                    Запись на стирку
                </Typography.Title>
                <Typography.Paragraph>
                    Здесь можно записаться на стирку. Для этого введите свое имя и зарезервируйте время.
                </Typography.Paragraph>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Ваше имя"
                        name="username"
                        rules={[{ required: true, message: 'Пожалуйста, введите имя!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Выберите время"
                        name="date"
                        rules={[{ required: true, message: 'Пожалуйста, выберите время для записи!' }]}
                    >
                        <DatePicker
                            format="YYYY-MM-DD HH:mm:ss"
                            disabledDate={this.disabledDate}
                            disabledTime={this.disabledDateTime}
                            showTime={{
                                hideDisabledOptions: true,
                                defaultValue: moment('00:00:00', 'HH:mm:ss')
                            }}
                        />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Записаться
                        </Button>
                    </Form.Item>
                </Form>
                { this.state.isViewOkAnswer &&
                    <Typography.Paragraph>
                        Вы успешно записались на {this.state.date}
                    </Typography.Paragraph>
                }
            </div>
        )
    }
}