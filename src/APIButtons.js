import React from "react";
import { Container } from "reactstrap";

import useResource from "./hooks/useResource";
import ModuleDiscover from "./components/ModuleDiscover";
import ModuleFetch from "./components/ModuleFetch";
import ModuleManage from "./components/ModuleManage";
import ModuleRequest from "./components/ModuleRequest";

export default function APIButtons() {
  const { error } = useResource();

  return (
    <Container style={{ width: "90%" }}>
      {/* <div className="d-grid gap-1"> */}
      <p style={{ color: "black" }}>{error && <p>{error.message}</p>}</p>
      <ModuleRequest />
      <ModuleFetch />
      <ModuleManage />
      <ModuleDiscover />

      {/* </div> */}
    </Container>
  );
}
