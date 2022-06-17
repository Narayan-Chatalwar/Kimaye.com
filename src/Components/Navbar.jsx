import React from "react";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.uppernotification}>
        <p>Delivering in Mumbai and Delhi | Same day delivery!</p>
      </div>
      {/* <div className={styles.bottomnavbar}> */}
      <div
        style={{
        
          height: "70px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#f3f4ed",
          padding: "20px",
          position:"absolute",
          top: "30",
          zIndex: "5",
          width: "100%",
        }}
      >
        {/* <div className={styles.leftmenu}> */}
        {/* <div style={{ display: "flex", alignItems: "center" }}>
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
          </div> */}

        <div style={{ display: "flex", gap: "35px" }}>
          <Menu>
            <MenuButton>
              SHOP
              <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              <MenuItem
                onClick={() => {
                  navigate("allfruits");
                }}
              >
                ALL FRUITS
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("freshcuts");
                }}
              >
                FRESH CUTS
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("fruitcombos");
                }}
              >
                FRUIT COMBOS
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("giftsbykimaye");
                }}
              >
                GIFTS BY KIMAYE
              </MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
              <MenuItem>GRAPE FAMILY BY KIMAYE</MenuItem>
              <MenuItem>RETURN AND REPLACEMENT</MenuItem>
              <MenuItem style={{ color: "lightgray" }}>
                FRUITS X SUBSCRIPTION
              </MenuItem>
              <MenuItem>COMMUNITY BUYYING</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton>
              LEARN
              <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              <MenuItem>OUR STORY</MenuItem>
              <MenuItem>WHY KIMAYE</MenuItem>
              <MenuItem>TRACEABILITY</MenuItem>
              <MenuItem>BEYOND FRUITS</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton>
              GROW
              <ChevronDownIcon />
            </MenuButton>
          </Menu>
        </div>
        {/* </div> */}
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
            alt="location"
            width={"25px"}
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
