import React, { Component } from "react";
import { Card, Typography, Row, Col } from "antd";

import Input from "../Shared/Input";


const { Title } = Typography;

class CategoriesForm extends Component {
    state = {
        inputs : {
            name            : "",
            description     : "",
            image           : "",
            background      : "",
            longdescription : ""
        },
        validation : {
            name            : false,
            description     : false,
            image           : false,
            background      : false,
            longdescription : false
        },

        isSubmitting : false
    };
    
    onChange = () => {

    };

    render() {
        const { inputs, validation } = this.state;
        const { isEdit } = this.props;

        return (
            <div style={{ margin : "20px 0" }}>
                <Card>
                    <Row gutter={ 20 }>
                        <Col span={ 24 }>
                            <Title level={ 2 }>{ isEdit ? "Edit category" : "Create category" }</Title>
                        </Col>
                        <Col span={ 24 }>
                            <Input
                                onChange={ this.onChange }
                                placeholder="Name"
                                property="name"
                                helper="Please enter the category's name"
                                valid={ validation.name }
                                value={ inputs.name }
                                required
                            />
                        </Col>
                        <Col span={ 24 }>
                            <Input
                                onChange={ this.onChange }
                                placeholder="Description"
                                property="description"
                                helper="Please enter the category's description"
                                valid={ validation.description }
                                value={ inputs.description }
                                isTextarea
                                required
                            />
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    }
}

export default CategoriesForm;