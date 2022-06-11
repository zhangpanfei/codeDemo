import React from "react";
import defaultStyles from "./index.module.less";

export default function index({ data, classNames = {}, styles = {} }) {
  const parseDocData = (data) => {
    const handleFunc = (item) => {
      const { type } = item;

      const className = classNames[type] || defaultStyles[type];
      const style = styles[type] || {};

      // 段落
      if (type === "paragraph") {
        return (
          <p className={className} style={style}>
            {item?.content?.map((i) => {
              return handleFunc(i);
            })}
          </p>
        );
      }

      // 文本
      if (type === "text") {
        return (
          <div className={className} style={style}>
            {item.text}
          </div>
        );
      }

      // 表格
      if (type === "table") {
        return (
          <table className={className} style={style}>
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
          <tr className={className} style={style}>
            {item?.content?.map((i) => {
              return handleFunc(i);
            })}
          </tr>
        );
      }

      // 单元格
      if (type === "cell") {
        return (
          <td className={className} style={style}>
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
        {data.map((item) => {
          return handleFunc(item);
        })}
      </>
    );
  };

  return <div className={defaultStyles.body}>{parseDocData(data.content)}</div>;
}
