import styles from "./header-mobile.module.css";
import HamburgerMenu from "./hamburger-menu";
import React from "react";

function HeaderMobile() {
  return (
    <header className={styles.header}>
      <article className={styles.headerIcons}>
        <img src="/user.svg" alt="User" />
        <img src="/alert.svg" alt="Alert" />
      </article>
      <article className={styles.logo}>
        <img src="/logo-mobile.svg" alt="Logo" />
      </article>
      <article className={styles.headerOptions}>
        <img src="/search.svg" alt="Search" />
        <HamburgerMenu />
      </article>
    </header>
  );
}

export default HeaderMobile;
