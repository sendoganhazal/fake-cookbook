import React from "react";
import Searchbox from "../Searchbox";
import styles from "./Hero.module.css";

export default function Hero() {
  const sectionClasses ="grid grid-nogutter justify-content-center align-content-center";
  return (
    <section className={`${styles.hero} ${sectionClasses}`}>
      <div className="col-12 md:col-6">
        <Searchbox />
      </div>
    </section>
  );
}
