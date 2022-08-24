import React, { useState } from "react";
import { fetch } from "@inrupt/solid-client-authn-browser";
// import { Container } from "reactstrap";
import {
  getAccessApiEndpoint,
  getAccessManagementUi,
} from "@inrupt/solid-client-access-grants";
import { useSession } from "@inrupt/solid-ui-react";
// import { MDBIcon } from "mdb-react-ui-kit";
import useResource from "../hooks/useResource";
import { moduleDiscoverDocLink } from "../constants";

export default function ModuleDiscover() {
  const { resourceIri, error, setError } = useResource();
  const { session } = useSession();
  const { webId, isLoggedIn } = session.info;
  const [getAccessApiEndpointRes, setAccessApiEndpointRes] = useState("");
  const [getAccessManagementUiRes, setGetAccessManagementUiRes] = useState("");

  const handleGetAccessApiEndpoint = async () => {
    try {
      const res = await getAccessApiEndpoint(resourceIri, { fetch });
      setAccessApiEndpointRes(res);
      setError("");
    } catch (e) {
      setError(e);
    }
  };

  const handleGetAccessManagementUi = async () => {
    console.log("handleGetAccessManagementUi", webId);
    try {
      const res = await getAccessManagementUi(webId, { fetch });
      setGetAccessManagementUiRes(res);
      setError("");
    } catch (e) {
      setError(e);
    }
  };

  return (
    // <Container style={{ width: "90%" }}>
    // <div className="d-grid gap-1">
    <>
      <p style={{ color: "black" }}>{error && <p>{error.message}</p>}</p>
      <a href={moduleDiscoverDocLink}>
        <p>Module: discover</p>
      </a>
      <i
        className="bi bi-check"
        style={{
          height: "100px",
          width: "100px",
          color: "green",
          margin: "10px",
        }}
      />
      <div>
        {isLoggedIn && resourceIri ? <span>yes</span> : <span>no</span>}

        <button
          onClick={handleGetAccessApiEndpoint}
          id="discovery-button"
          type="button"
          className="btn btn-primary"
        >
          getAccessApiEndpoint
        </button>
      </div>
      <p style={{ color: "black" }}>
        {getAccessApiEndpointRes || "click the button above"}
      </p>
      {isLoggedIn && webId ? <span>yes</span> : <span>no</span>}
      <button
        onClick={handleGetAccessManagementUi}
        id="discovery-button"
        type="button"
        className="btn btn-primary"
      >
        getAccessManagementUi
      </button>
      <p style={{ color: "black" }}>
        {getAccessManagementUiRes || "click the button above"}
      </p>
    </>
    // </div>
    // </Container>
  );
}
