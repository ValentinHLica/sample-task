import React from "react";

import classNames from "classnames";

import styles from "../../styles/components/footer.module.scss";

const Footer = () => {
  const navigation: {
    title?: string;
    urls: {
      title: string;
      url: string;
    }[];
  }[] = [
    {
      title: "Vivamus",
      urls: Array.from({ length: 4 }, (_, index) => ({
        title: `Title ${index + 1}`,
        url: "url",
      })),
    },
    {
      title: "Elementum",
      urls: Array.from({ length: 3 }, (_, index) => ({
        title: `Title ${index + 1}`,
        url: "url",
      })),
    },
    {
      title: "Lightus",
      urls: Array.from({ length: 5 }, (_, index) => ({
        title: `Title ${index + 1}`,
        url: "url",
      })),
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={classNames("container", styles.footer__container)}>
        <nav className={styles.footer__navigation}>
          {navigation.map((nav, index) => (
            <div className={styles.navigation__item} key={index}>
              {nav.title && <h4 className={styles.item__title}>{nav.title}</h4>}

              <ul className={styles.item__list}>
                {nav.urls.map((navItem, idx) => (
                  <li key={idx} className={styles.list__item}>
                    <a href={navItem.url}>{navItem.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <p className={styles.footer__copyright}>
          Copyright © 2021 All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
