import React from "react";
import "./Footer.css";
import { useState } from "react";

const headerLists = {
  "Parts & Supplies": [
    "Order Parts",
    "Special Offers",
    "Ordering Tutorials",
    "Inventory Inquiry",
    "Saved Jobs",
    "Reference Utilities",
    "Catalog",
  ],
  Warranties: [
    "Warranty Request",
    "Extended Warranty",
    "Limited Warranty",
    "Dealer Performance Grade",
    "Serial Number Help",
  ],
  "Product Info": [
    "e-Library",
    "Electronic Performance Data",
    "Product Selection (TOPSS)",
    "Product Demonstration",
    "Residential & Light Commercial Products",
    "Handbook",
    "HVAC Knowledge Center",
    "Airside Performance Calculator",
  ],
  Marketing: [
    "Residential Sales",
    "Light Commercial Sales",
    "Trane Connection",
    "Marketing/Advertising",
    "Resources",
    "Total Market Coverage",
    "Playbook",
    "Customer Satisfaction Survey",
    "Communication and Promotions",
    "Comfort Options Upgrade Center",
    "Marketing Materials",
    "Merchandise Shop",
  ],
  Finances: ["Account Track", "Leasing Information", "Documents"],
  Training: [
    "Learning Resources",
    "Local Training",
    "Strategic Training Allies",
    "ComfortSite Training",
  ],
};

const NavigationFooterLinks = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item} className="footer-text">
          <a href={`#${item}}`}>{item}</a>
        </li>
      ))}
    </ul>
  );
};

const Footer = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <footer>
      <nav className="footer-desktop">
        <div className="footer-columns">
          <div>
            <h3 className="footer-header">{Object.keys(headerLists)[0]}</h3>
            <NavigationFooterLinks
              items={headerLists[Object.keys(headerLists)[0]]}
            />
          </div>
          <div>
            <h3 className="footer-header">{Object.keys(headerLists)[1]}</h3>
            <NavigationFooterLinks
              items={headerLists[Object.keys(headerLists)[1]]}
            />
          </div>
          <div>
            <h3 className="footer-header">{Object.keys(headerLists)[2]}</h3>
            <NavigationFooterLinks
              items={headerLists[Object.keys(headerLists)[2]]}
            />
          </div>
          <div>
            <h3 className="footer-header">{Object.keys(headerLists)[3]}</h3>
            <NavigationFooterLinks
              items={headerLists[Object.keys(headerLists)[3]]}
            />
          </div>
          <div>
            <h3 className="footer-header">{Object.keys(headerLists)[4]}</h3>
            <NavigationFooterLinks
              items={headerLists[Object.keys(headerLists)[4]]}
            />
          </div>
          <div>
            <h3 className="footer-header">{Object.keys(headerLists)[5]}</h3>
            <NavigationFooterLinks
              items={headerLists[Object.keys(headerLists)[5]]}
            />
          </div>
        </div>
      </nav>
      <nav className="footer-mobile">
        <ul>
          {Object.keys(headerLists).map((header) => (
            <li
              key={header}
              className="footer-mobile"
              onMouseEnter={() => setHoveredItem(header)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <a href={`#${header}}`}>{header}</a>
              {hoveredItem === header && (
                <ul>
                  {headerLists[header].map((item, index) => (
                    <li key={index} className="footer-mobile-item">
                      <a href={`#${item}`}>{item}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <hr className="divider" />
      <div className="footer-logo">
        <img src="footerLogo.png" alt="Trane logo" />
        <span>© 2023 Trane Technologies. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
