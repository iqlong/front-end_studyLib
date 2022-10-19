import React, { useState, ReactNode } from "react";
import Style from './index.module.scss'

// 类型应该不可以直接在这儿设置默认值
interface ButtonProps {
  block?: boolean /**按钮设置为父的100% */;
  danger?: boolean /**危险按钮 */;
  disabled?: boolean /**按钮失效 */;
  ghost?: boolean /**按钮背景透明 */;
  loading?: boolean | { delay: number } /**设置加载按钮 */;

  href?: string /**指定此属性，btn行为类似a标签 */;
  htmlType?: string /**设置button原生的type值 */;
  icon?: ReactNode /**设置按钮的图标组件 */;
  shape?: "default" | "circle" | "round" /**设置按钮的形状 */;
  size?: "large" | "middel" | "small" /**设置按钮的大小 */;
  target?: string /**相当于a的target，在href存在的时候生效 */;
  /**设置按钮的类型 */
  type?: "primary" | "ghost" | "dashed" | "link" | "text" | "default";
  /**点击按钮的回调 */
  onClick?: (event) => void;
  children?: any
}
const Button = (props: ButtonProps) => {
  const {
    block = false,
    danger = false,
    disabled,
    ghost,
    href,
    htmlType,
    icon,
    loading,
    shape,
    size,
    target,
    type,
    onClick = () => {},
    children
  } = props;
  const ButWidth = block ? "100%" : "";

  return (
    <>
      <button
        className={`${Style['antd_button']} ${danger ? Style.danger : ''} ${type ? Style[type] : ''}`}
        style={{ width: ButWidth }} onClick = { (e) => {console.log(e.currentTarget.textContent);onClick(e)}}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
