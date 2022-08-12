import React, { useState } from "react";
import { fetch } from "@inrupt/solid-client-authn-browser";
import { Container } from "reactstrap";
import {
  approveAccessRequest,
  denyAccessRequest,
  fetchWithVc,
  getAccessApiEndpoint,
  getAccessManagementUi,
} from "@inrupt/solid-client-access-grants";
import { useSession } from "@inrupt/solid-ui-react";
import useResource from "./hooks/useResource";
import {
  moduleDiscoverDocLink,
  moduleFetchDocLink,
  moduleManageDocLink,
} from "./constants";

export default function APIButtons() {
  const { resourceIri, accessGrant, requestVc, error, setError } =
    useResource();
  const { session } = useSession();
  const webId = session.info.webId || null;

  const [getAccessApiEndpointRes, setAccessApiEndpointRes] = useState(
    "click the button above"
  );
  const [getAccessManagementUiRes, setgetAccessManagementUiRes] = useState("");
  const [fetchWithVcRes, setFetchWithVcRes] = useState("");
  const [approveAccessRequestRes, setApproveAccessRequestRes] = useState("");
  const [denyAccessRequestRes, setDenyAccessRequestRes] = useState("");

  const handleGetAccessApiEndpoint = async () => {
    try {
      const res = await getAccessApiEndpoint(resourceIri, { fetch });
      setAccessApiEndpointRes(res);
    } catch (e) {
      setError(e);
    }
  };

  const handleGetAccessManagementUi = async () => {
    try {
      const res = await getAccessManagementUi(webId, { fetch });
      setgetAccessManagementUiRes(res);
    } catch (e) {
      setError(e);
    }
  };

  const handleFetchWithVc = async () => {
    try {
      const res = await fetchWithVc(resourceIri, accessGrant, { fetch });
      setFetchWithVcRes(res);
    } catch (e) {
      setError(e);
    }
  };

  const handleApproveAccessRequest = async () => {
    try {
      const res = await approveAccessRequest(requestVc, { fetch });
      setApproveAccessRequestRes(res);
    } catch (e) {
      setError(e);
    }
  };
  const handleDenyAccessRequest = async () => {
    try {
      const res = await denyAccessRequest(requestVc, { fetch });
      setDenyAccessRequestRes(res);
    } catch (e) {
      setError(e);
    }
  };

  return (
    <Container style={{ width: "90%" }}>
      <div className="d-grid gap-1">
        {error && <p>{error.message}</p>}
        <a href={moduleDiscoverDocLink}>
          <p>Module: discover</p>
        </a>
        <button
          onClick={handleGetAccessApiEndpoint}
          id="discovery-button"
          type="button"
          className="btn btn-primary"
        >
          getAccessApiEndpoint
        </button>
        <p style={{ color: "white" }}>{getAccessApiEndpointRes}</p>

        <button
          onClick={handleGetAccessManagementUi}
          id="discovery-button"
          type="button"
          className="btn btn-primary"
        >
          getAccessManagementUi
        </button>
        <p>{getAccessManagementUiRes}</p>

        <a href={moduleFetchDocLink}>
          <p>Module: fetch</p>
        </a>

        <button
          onClick={handleFetchWithVc}
          id="discovery-button"
          type="button"
          className="btn btn-primary"
        >
          fetchWithVc - TBD
        </button>
        <p>{fetchWithVcRes}</p>

        <a href={moduleManageDocLink}>
          <p>Module: manage</p>
        </a>
        <button
          onClick={handleApproveAccessRequest}
          id="discovery-button"
          type="button"
          className="btn btn-primary"
        >
          approveAccessRequest - TBD
        </button>
        <p>{approveAccessRequestRes}</p>

        <button
          onClick={handleDenyAccessRequest}
          id="discovery-button"
          type="button"
          className="btn btn-primary"
        >
          denyAccessRequest - TBD
        </button>
        <p>{denyAccessRequestRes}</p>
      </div>
    </Container>
  );
}
