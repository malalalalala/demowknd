import styles from "./header.module.css";

function Logo() {
  return (
    <article className={styles.logo}>
      <img src="/logo.svg" alt="Logo" />
    </article>
  );
}

export default Logo;
