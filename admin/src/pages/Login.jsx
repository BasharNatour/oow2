import React, { Component } from "react";
import {
    Row,
    Col,
    Card,
    Icon,
    Typography,
    Form,
    notification
} from "antd";
import Router from "next/router";

import "antd/dist/antd.css";

import Input from "../Components/Shared/Input";

import { isFormValid } from "../helpers";
import { EMAIL_REGEX } from "../defaults";

import axios, { URLS } from "../api";

const { Title } = Typography;

class Countries extends Component {
    state = {
        inputs : {
            email    : "",
            password : ""
        },
        validation : {
            email    : false,
            password : false
        },

        isSubmitting : false
    };

    componentDidMount() {
        if (window.localStorage.getItem("token")) {
            return Router.replace("/");
        }
    }

    onChange = ({ target : { value } }, property, isValid) => {
        this.setState((state) => {
            state.inputs    [property] = value;
            state.validation[property] = isValid;
            return state;
        });
    };

    login = async () => {
        
        const { inputs } = this.state;
        const { data } = await axios({ ...URLS.LOGIN(), data : inputs });
        return data;
    };

    onSubmit = () => {
        if (isFormValid(this.state.validation)) {
            this.setState({ isSubmitting : true });
            this.login()
                .then(({ data }) => {
                    window.localStorage.setItem("token", data.token);
                    Router.replace("/");
                })
                .catch((err) => {
                    console.log(err);
                    this.setState({ isSubmitting : false });
                    notification.error({
                        message     : "Invalid credentials",
                        description : "Your username or password is invalid",
                    });
                });
        }
    };

    render() {
        const { inputs, validation, isSubmitting } = this.state;

        return (
            <Row style={{ minHeight : "100vh" }} type="flex" justify="center" align="middle">
                <Col xs={{ span: 20 }} sm={{ span: 16 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span : 6 }}>
                    <Form>
                        <Card
                            actions={[
                                (
                                    isSubmitting
                                        ? <Icon type="loading" />
                                        : <Icon onClick={ this.onSubmit } type="arrow-right" />
                                )
                            ]}
                        >
                            <Title>Login</Title>
                            <Input
                                onChange={ this.onChange }
                                placeholder="Your email address"
                                property="email"
                                helper="Please enter a valid email address"
                                valid={ validation.email }
                                value={ inputs.email }
                                regex={ EMAIL_REGEX }
                                required
                            />
                            <Input
                                onChange={ this.onChange }
                                placeholder="Your password"
                                type="password"
                                property="password"
                                helper="Please enter your password"
                                valid={ validation.password }
                                value={ inputs.password }
                                required
                            />
                        </Card>
                    </Form>
                </Col>
            </Row>
        );
    }
}

export default Countries;