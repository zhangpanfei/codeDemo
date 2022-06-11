import React, { Component } from "react";
import { Row, Col } from "antd";
import dynamic from "next/dynamic";
import moment from "moment";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import DocParse from '../../components/DocParse';
import styles from "./index.module.less";

const DynamicReactJson = dynamic(import("react-json-view"), { ssr: false });
export default class index extends Component {
  state = {
    data: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [{ type: "text", text: "Hello, Word!" }],
        },
        {
          type: "table",
          content: [
            {
              type: "row",
              content: [
                {
                  type: "cell",
                  content: [
                    {
                      type: "paragraph",
                      content: [{ type: "text", text: "cell1" }],
                    },
                  ],
                },
                {
                  type: "cell",
                  content: [
                    {
                      type: "paragraph",
                      content: [{ type: "text", text: "cell2" }],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  };

  render() {
    const { data } = this.state;

    return (
      <div className={styles.body}>
        <Row>
          <Col span={12}>
            <DynamicReactJson src={data} onEdit={()=>{}} displayDataTypes={false} />
          </Col>
          <Col span={12}>
            <DocParse data={data} />
          </Col>
        </Row>
      </div>
    );
  }
}
