import React, { Component } from "react";
import { Row, Col, message, Switch } from "antd";
import dynamic from "next/dynamic";
import axios from "axios";
import DocParse from "../../components/DocParse";
import styles from "./index.module.less";

const DynamicReactJson = dynamic(import("react-json-view"), { ssr: false });
export default class index extends Component {
  state = {
    data: {},
    openClassNames: false,
    openStyles: false,
  };

  constructor(props) {
    super(props);
    this.getData();
  }

  getData = async () => {
    const {
      data: { code, msg, data },
    } = await axios.get("/api/data");
    if (code !== 0) {
      return message.error(msg);
    }
    this.setState({ data });
  };

  render() {
    const { data, openClassNames, openStyles } = this.state;

    return (
      <div className={styles.body}>
        <Row>
          <Col span={24} className={styles.header}>
            <div className={styles.action}>
              全局自定义classNames
              <Switch onChange={(v) => this.setState({ openClassNames: v })} />
            </div>
            <div className={styles.action}>
              全局自定义styles
              <Switch onChange={(v) => this.setState({ openStyles: v })} />
            </div>
            <div className={styles.action}>数据中styles自动生效</div>
          </Col>
          <Col span={8}>
            <DynamicReactJson src={data} displayDataTypes={false} />
          </Col>
          <Col span={16}>
            <DocParse
              data={data}
              classNames={
                openClassNames
                  ? { table: "myTable", text: "myText", h1: "myH1" }
                  : {}
              }
              styles={
                openStyles
                  ? {
                      table: { backgroundColor: "#ffc966" },
                      text: { color: "green", fontStyle: "italic" },
                    }
                  : {}
              }
            />
          </Col>
        </Row>
      </div>
    );
  }
}
