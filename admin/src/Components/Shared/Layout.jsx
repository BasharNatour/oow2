import React, { Component, Fragment } from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import Router from "next/router";

import { Layout, Menu, Icon } from "antd";

import { LOCAL_URLS } from "../../defaults";

const { Header, Content, Footer, Sider } = Layout;

class MainLayout extends Component {
    state = {
        loaded : false,
        collapsed: false
    };

    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }

    componentDidMount() {
        if (!window.localStorage.getItem("token")) {
            return Router.replace("/login");
        }
        this.setState({ loaded : true });
    }

    render() {
        const { children, router : { pathname }, headerText } = this.props;
        if (!this.state.loaded) {
            return (
                <Fragment>
                    <style jsx>{`
                        .loader {
                            min-width       : 100vw;
                            min-height      : 100vh;
                            display         : flex;
                            flex-direction  : column;
                            justify-content : center;
                            align-items     : center;
                        }
                    `}</style>
                    <div className="loader">
                        <img src="http://localhost/img/Home-page/logo.png" />
                        <div style={{ marginTop : 30 }}>
                            <Icon type="loading" style={{ fontSize : "40px" }} />
                        </div>
                    </div>
                </Fragment>
            );
        }

        return (
            <Layout style={{ minHeight: "100vh" }}>
                <Sider
                    collapsible
                    collapsed={ this.state.collapsed }
                    onCollapse={ this.onCollapse }
                >
                    <style jsx>{`
                        .logo {
                            padding : 20px 0;
                            display : flex;
                            justify-content : center;
                        }
                    `}</style>
                    <div className="logo">
                        <img src="http://localhost/img/Home-page/logo.png" />
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={[pathname]} mode="inline">
                        <Menu.Item key="/countries">
                            <Link href="/countries">
                                <a>
                                    <Icon type="global" />
                                    <span>Countries & Cities</span>
                                </a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={ LOCAL_URLS.CATEGORIES_INDEX() }>
                            <Link href={ LOCAL_URLS.CATEGORIES_INDEX() }>
                                <a>
                                    <Icon type="branches" />
                                    <span>Categories</span>
                                </a>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header>
                        <style jsx>{`
                            .header-text {
                                color : #FFF;
                                font-size : 24px;
                            }
                        `}</style>
                        <div className="header-text">{ headerText }</div>
                    </Header>
                    <Content style={{ margin: "0 16px" }}>
                        <style jsx>{`
                            .page-content {
                                padding : 20px 10px;
                            }
                        `}</style>
                        <div className="page-content">
                            { children }
                        </div>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                        OOW Admin ©2018 Created by Bashar
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(MainLayout);
