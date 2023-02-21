import React, { DOMAttributes, useRef } from "react";

import classNames from "classnames";

import { MapPinIcon, SearchIcon } from "../CustomIcons";
import Button from "../UI/Button";
import Input from "../UI/Input";

import styles from "../../styles/components/landing.module.scss";

const cardsData = [
  "Lorem ipsum",
  "Lorem ipsum dolor sit amet",
  "consectetuer adipiscing",
  "lorem ipsum",
];

const Landing = () => {
  const searchInput = useRef<HTMLInputElement>(null);
  const locationInput = useRef<HTMLInputElement>(null);

  const onSubmit: DOMAttributes<HTMLFormElement>["onSubmit"] = (form) => {
    form.preventDefault();

    if (!(searchInput.current && locationInput.current)) return;

    console.log(
      `User Searched: ${searchInput.current.value} in ${locationInput.current.value}`
    );
  };

  return (
    <div className={classNames("container", styles.landing)}>
      <div className={styles.landing__wrapper}>
        <h1 className={styles.landing__title}>
          Lorem ipsum dolor sit amet,
          <br /> consectetuer adipiscing.
        </h1>

        <form onSubmit={onSubmit} className={styles.landing__form}>
          <Input
            refEl={searchInput}
            icon={<SearchIcon />}
            placeholder="Search..."
          />

          <Input
            refEl={locationInput}
            icon={<MapPinIcon />}
            placeholder="Location..."
          />

          <Button type="submit" text="Submit" theme="primary" />
        </form>

        <p className={styles.landing__description}>
          Lorem ipsum dolor sit amet
        </p>

        <ul className={styles.landing__cards}>
          {cardsData.map((item, index) => (
            <li className={styles.card__item} key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Landing;
