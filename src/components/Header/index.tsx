import React from "react";

import classNames from "classnames";

import { ArrowDownIcon, PersonIcon } from "../CustomIcons";
import Button from "../UI/Button";

import styles from "../../styles/components/header.module.scss";

const Header = () => {
  return (
    <header className={classNames("container", styles.header)}>
      <div className={styles.header__logo}>
        <PersonIcon />
      </div>

      <nav className={styles.header__navigation}>
        <ul className={styles.navigation__list}>
          <li className={styles.list__item}>
            <ArrowDownIcon /> consectetuer
          </li>

          <li className={styles.list__item}>
            <Button text="Anmelden" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
