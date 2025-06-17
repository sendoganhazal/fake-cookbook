import React from "react";
import Searchbox from "../Searchbox";
import styles from "./Header.module.css";
import viteLogo from "/vite.svg";
import { Menubar } from "primereact/menubar";

export default function Header() {
  const start = (
    <ul className="flex align-items-center gap-2">
      <li>
        <a href="/" className="p-button p-button-text font-bold">
          <img src={viteLogo} className="logo" alt="Vite logo" />
           Fake CookBook
        </a>
      </li>
    </ul>
  );
   const end = (
    <ul className="flex align-items-center gap-2">
      <li>
        <a href="/login" className="p-button p-button-warning gap-1 ">
          <i className="pi pi-sign-in" />
          Login
        </a>
      </li>
      <li>
        <a href="/sign-up" className="p-button p-button-primary gap-1">
          <i className="pi pi-user-plus"/>
          <span>Sign Up</span>
        </a>
      </li>
    </ul>
  );
  return (
    <header className={styles.header}>
      <Menubar start={start} end={end} className={styles.menubar} />
    </header>
  );
}
