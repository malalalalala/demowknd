import UserProfile from "./UserProfile";
import styles from "./header.module.css";
import Logo from "./logo";
import Search from "./search";

function HeaderContent() {
  return (
    <section className={styles.container}>
      <section className={styles.content}>
        <Logo />
        <Search className={styles.search} />
        <UserProfile />
      </section>
    </section>
  );
}

export default HeaderContent;
