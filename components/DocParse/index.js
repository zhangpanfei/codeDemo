import React from "react";
import { v4 as uuidv4 } from "uuid";
import defaultStyles from "./index.module.less";

export default function index({ data, classNames = {}, styles = {} }) {
  const parseDocData = (data) => {
    const handleFunc = (item) => {
      const { type } = item;

      const className = classNames[type] || defaultStyles[type];
      let style = styles[type] || {};
      if (item.styles) {
        style = { ...style, ...item.styles };
      }

      const key = uuidv4();

      // 段落
      if (type === "paragraph") {
        return (
          <p key={key} className={className} style={style}>
            {item?.content?.map((i) => {
              return handleFunc(i);
            })}
          </p>
        );
      }

      // 标题
      if (type === "h1") {
        return (
          <h1 key={key} className={className} style={style}>
            {item.text}
          </h1>
        );
      }

      // 文本
      if (type === "text") {
        return (
          <span key={key} className={className} style={style}>
            {item.text}
          </span>
        );
      }

      if (type === "image") {
        return (
          <img
            key={key}
            className={className}
            style={style}
            src={item.src}
            alt={item.alt}
          />
        );
      }

      // 表格
      if (type === "table") {
        return (
          <table key={key} className={className} style={style}>
            <tbody>
              {item?.content?.map((i) => {
                return handleFunc(i);
              })}
            </tbody>
          </table>
        );
      }

      // 行
      if (type === "row") {
        return (
          <tr key={key} className={className} style={style}>
            {item?.content?.map((i) => {
              return handleFunc(i);
            })}
          </tr>
        );
      }

      // 单元格
      if (type === "cell") {
        return (
          <td key={key} className={className} style={style}>
            {item?.content?.map((i) => {
              return handleFunc(i);
            })}
          </td>
        );
      }

      return "";
    };

    return (
      <>
        {data?.map((item) => {
          return handleFunc(item);
        })}
      </>
    );
  };

  return <div className={defaultStyles.body}>{parseDocData(data.content)}</div>;
}
