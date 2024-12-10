import React from "react";
import Header from "../components/Header.tsx";
import Styles from "../stylesheets/About.module.css";

export default function Home() {
  return (
    <div className={Styles.about}>
      <Header />
    </div>
  );
}
