import React, {
  ClassAttributes,
  InputHTMLAttributes,
  ReactElement,
} from "react";

import styles from "../../styles/components/UI/input.module.scss";

type Props = {
  refEl?: ClassAttributes<HTMLInputElement>["ref"];
  onChange?: InputHTMLAttributes<HTMLInputElement>["onChange"];
  placeholder?: string;
  icon?: ReactElement;
  value?: string;
};

const Input = ({ onChange, refEl, value, icon, placeholder }: Props) => (
  <div className={styles.input}>
    {icon}

    <input
      ref={refEl}
      className={styles.input__element}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  </div>
);

export default Input;
