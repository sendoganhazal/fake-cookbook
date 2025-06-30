/* eslint-disable no-unused-vars */

import { Carousel } from "primereact/carousel";
import { useState, useEffect } from "react";
import { Panel } from "primereact/panel";
import styles from "./MealTypes.module.css"

export default function MealTypes({ data }) {
  console.log("data", data);
  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];
  const template = (item) => {
    return (
      <Panel header="" className={styles.panel}>
        <p className="m-0">{item}</p>
      </Panel>
    );
  };
  return (
    <>
      <Carousel
        value={data}
        numScroll={1}
        numVisible={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={template}
      />
    </>
  );
}
