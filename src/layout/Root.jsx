import React from "react";
import Header from "../components/header/Header";

export default function Root({children}) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
