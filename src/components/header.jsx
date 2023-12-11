import NavigationMenu from "./navigation-menu";
import HeaderContent from "./header-content";
import styles from "./header.module.css";
import React from "react";

function Header() {
  return (
    <header className={styles.header}>
      <HeaderContent />
      <NavigationMenu />
    </header>
  );
}

export default Header;
