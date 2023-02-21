import React, { ButtonHTMLAttributes } from "react";

import classNames from "classnames";

import styles from "../../styles/components/UI/button.module.scss";

type Props = {
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  theme?: "light" | "primary" | "white" | "success";
  text: string;
};

const Button = ({ text, theme = "light", type = "button" }: Props) => (
  <button
    type={type}
    className={classNames(styles.button, styles[`button__${theme}`])}
  >
    {text}
  </button>
);

export default Button;
