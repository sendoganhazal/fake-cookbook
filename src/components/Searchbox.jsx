import React from "react";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default function Searchbox() {
  return (
    <div className="card">
      <div className="p-inputgroup flex-1">
        <InputText placeholder="Keyword" />
        <Button icon="pi pi-search" />
      </div>
    </div>
  );
}
