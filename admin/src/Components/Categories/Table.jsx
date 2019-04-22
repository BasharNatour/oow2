import React, { Component } from "react";
import Link from "next/link";

import { Table, Col, Row, Divider } from "antd";


import { queryStringifyParam } from "../../helpers";

import { LOCAL_URLS } from "../../defaults";

import DeleteLink from "../Shared/DeleteLink";

function ExpandedRow({ background, image, longdescription }) {
    return (
        <div>
            <Row type="flex" gutter={ 20 }>
                <Col span={ 24 }>
                    <div style={{ padding : "10px 0" }}>
                        <b>Long description</b>
                        <br />
                        { longdescription }
                    </div>
                </Col>
                <Col md={{ span: 6 }} sm={{ span: 12 }} xs={{ span : 24 }}>
                    <b>Image</b>
                    <div style={{ marginTop : 20 }}>
                        <img src={ image } style={{ width : "100%" }} />
                    </div>
                </Col>
                <Col md={{ span: 18 }} sm={{ span: 12 }} xs={{ span : 24 }}>
                    <b>Background</b>
                    <div style={{ marginTop : 20 }}>
                        <img src={ background } style={{ width : "100%" }} />
                    </div>
                </Col>
            </Row>
        </div>
    );
}


function CategoriesTable({ data = [], onDelete }) {
    return (
        <Table
            dataSource={ data }
            expandedRowRender={ ExpandedRow }
            rowKey="_id"
            columns={[
                {
                    title     : "Name",
                    dataIndex : "name",
                    key       : "name"
                }, {
                    title     : "Description",
                    dataIndex : "description",
                    key       : "description"
                }, {
                    title  : "Action",
                    key    : "action",
                    render(_, { _id }) {
                        return (
                            <span>
                                <Link
                                    href={ queryStringifyParam(LOCAL_URLS.CATEGORIES_UPDATE("category"), "category", _id) }
                                    as={ LOCAL_URLS.CATEGORIES_UPDATE(_id) }
                                >
                                    <a>Edit</a>
                                </Link>
                                <Divider type="vertical" />
                                <DeleteLink onDelete={ onDelete } args={ [_id] }></DeleteLink>
                            </span>
                        );
                    }
                }]
            }    
        />
    );
}

export default CategoriesTable;