import React from "react";
import { Link as RouterLink } from "react-router-dom";

import styles from "./link.module.css";

const Link = ({ to, children, ...props }) => {
  return (
    <RouterLink to={to} className={styles.link} {...props}>
      {children}
    </RouterLink>
  );
};

export default Link;
