import React from "react";

import * as styles from "./index.module.scss";

export const DoubleLogo = () => {
  return (
    <div className={styles.animatedLogo}>
      <img className={styles.back} src="./double_logo_back.png" />
      <img className={styles.fore} src="./double_logo_fore.png" />
    </div>
  );
};
