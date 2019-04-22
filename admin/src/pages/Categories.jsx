import React, { Component } from "react";
import { Typography, notification } from "antd";
import "antd/dist/antd.css";

import Layout from "../Components/Shared/Layout";

import CategoriesForm from "../Components/Categories/Form";
import CategoriesTable from "../Components/Categories/Table";

import axios, { URLS } from "../api";

const { Title } = Typography;

class Categories extends Component {
    static async getInitialProps() {
        const { data } = await axios({ ...URLS.GET_CATEGORIES() });

        return {
            data      : data.data,
            isLoading : false
        };
    }

    state = {
        data      : this.props.data,
        isLoading : true
    };

    async deleteCategory(_id) {
        await axios({ ...URLS.DELETE_CATEGORIES(_id) });
    }

    onDelete = (_id) => {
        this.deleteCategory(_id)
            .then(() => {
                this.isDeleting = false;
                const { data } = this.state;
                notification.error({
                    message     : "Deleted successfully",
                    description : `${data.filter(({ _id : itemId }) => _id === itemId)[0].name} was deleted successfully!`,
                });
                this.setState({ data : data.filter(({ _id : itemId }) => _id !== itemId) });
            })
            .catch(console.log);
    };

    onCreate = (formData) => {

    };

    render() {
        const { data } = this.state;
        return (
            <Layout headerText="Categories">
                <CategoriesForm
                    
                />
                <CategoriesTable
                    data={ data }
                    onDelete={ this.onDelete }
                />
            </Layout>
        );
    }
}

export default Categories;