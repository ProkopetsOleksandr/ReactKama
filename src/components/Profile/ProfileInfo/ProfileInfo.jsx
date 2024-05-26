import React from "react";
import classes from "./ProfileInfo.module.css";

export default function ProfileInfo() {
  return (
    <div>
      <div>
        <img src="https://c0.wallpaperflare.com/preview/282/489/126/beach-exotic-holiday-horizon.jpg" alt="sea" />
      </div>

      <div className={classes.descriptionBlock}>
        <img src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg" alt="ava" style={{ width: "60px" }} />

        Description
      </div>
    </div>
  );
}
