import { useState } from "react";
import NavigationMenu from "./navigation-menu";
import styles from "./header-mobile.module.css";
import React from "react";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <button className={styles.hamburger} onClick={toggle}>
        <img src="/menu.svg" alt="Menu" />
      </button>
      {isOpen && (
        <div className={styles.menu}>
          <NavigationMenu />
        </div>
      )}
    </>
  );
}

export default HamburgerMenu;
