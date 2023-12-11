import styles from "./header.module.css";

const links = [
  "Home",
  "Online Ordering",
  "Program Information",
  "Relationship",
  "Facility Data",
  "Project Tracking",
  "Retrofit & Replacement",
  "Order",
  "Parts & Supplies",
  "Financials",
  "Marketing",
  "Warranty",
  "Commercial Training",
  "Residential Training",
  "Home & Diagnostics",
  "Pivot",
  "Supplier",
  "Product Information",
  "Product Information",
];

function NavigationMenu() {
  return (
    <nav className={styles.nav}>
      <section className={styles.navContent}>
        {links.map((link) => (
          <div className={styles.navLink} key={link}>
            <a href="">{link}</a>
          </div>
        ))}
      </section>
    </nav>
  );
}

export default NavigationMenu;
