import React from "react";

import classNames from "classnames";

import styles from "../../styles/components/UI/button.module.scss";

type Props = {
  text: string;
  theme?: "light" | "primary" | "white" | "success";
};

const Button = ({ text, theme = "light" }: Props) => (
  <button className={classNames(styles.button, styles[`button__${theme}`])}>
    {text}
  </button>
);

export default Button;
