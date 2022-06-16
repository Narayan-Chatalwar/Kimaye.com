import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className={styles.uppernotification}>
        <p>Delivering in Mumbai and Delhi | Same day delivery!</p>
      </div>
      <div className={styles.bottomnavbar}>
        <div className={styles.leftmenu}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to="/">SHOP</Link>
            <span
              class="material-symbols-outlined"
              style={{ fontSize: "18px", color: "gray" }}
            >
              expand_more
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to="/">LEARN</Link>
            <span
              class="material-symbols-outlined"
              style={{ fontSize: "18px", color: "gray" }}
            >
              expand_more
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to="/">GROW </Link>
          </div>
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_400x.png?v=1596288204"
            alt="logo"
            width={"135px"}
            height={"35px"}
          />
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
         
          <img
            src="https://cdn.icon-icons.com/icons2/2642/PNG/512/google_map_location_logo_icon_159350.png"
            alt="location" width={"25px"}
          />
          <span>Mumbai</span>
          <span class="material-symbols-outlined">search</span>
          <span class="material-symbols-outlined">person</span>
          <span class="material-symbols-outlined">local_mall</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
