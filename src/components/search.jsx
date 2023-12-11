import styles from "./header.module.css";

function Search({ className }) {
  return (
    <article className={`${styles.searchContainer} ${className}`}>
      <input type="text" placeholder="Select Portal View" />
      <img src="/arrow-down.svg" alt="Arrow Down" />
    </article>
  );
}

export default Search;
