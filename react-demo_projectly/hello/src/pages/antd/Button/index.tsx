import React, { useState, FC, ReactNode } from "react";

// 类型应该不可以直接在这儿设置默认值
interface ButtonProps {
    block: boolean;     /**按钮设置为父的100% */
    danger: boolean;    /**危险按钮 */
    disabled: boolean;  /**按钮失效 */
    ghost: boolean;     /**按钮背景透明 */
    href: string;       /** */
    htmlType: string;
    icon: ReactNode;
    loading: boolean | { delay: number };
    shape: 'default' | 'circle' | 'round';
    size: 'large' | 'middel' | 'small';
    targe: string;
    type: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
    onClick: (event) => void;
}
const Button = () => {

}