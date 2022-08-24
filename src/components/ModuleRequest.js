import React, { useState } from "react";
import { fetch } from "@inrupt/solid-client-authn-browser";
import { Container } from "reactstrap";
import {
  cancelAccessRequest,
  getAccessGrantFromRedirectUrl,
  issueAccessRequest,
} from "@inrupt/solid-client-access-grants";
// import { MDBIcon } from "mdb-react-ui-kit";
import { useSession } from "@inrupt/solid-ui-react";
import useResource from "../hooks/useResource";
// import IssueRequestForm from "./IssueRequestForm";

const examplePurpose = "https://w3id.org/dpv#RequestedServiceProvision";

export default function ModuleRequest() {
  const { requestVcUrl, redirectUrl, setError, resourceIri, resourceOwner } =
    useResource();
  const [cancelAccessRequestRes, setCancelAccessRequestRes] = useState("");
  const [accessMatrix] = useState("");
  const [issueAccessRequestRes, setIssueAccessRequestRes] = useState("");
  const [
    getAccessGrantFromRedirectUrlRes,
    setGetAccessGrantFromRedirectUrlRes,
  ] = useState("");

  const { session } = useSession();
  const { isLoggedIn } = session.info;

  const handleIssueAccessRequest = async () => {
    const accessExpiration = new Date(Date.now());
    accessExpiration.setHours(23, 59, 59);
    const params = {
      access: accessMatrix,
      expirationDate: accessExpiration,
      issuanceDate: new Date(),
      purpose: [examplePurpose],
      resourceOwner,
      resources: [resourceIri],
    };
    try {
      const res = await issueAccessRequest(params, {
        fetch,
      });
      setIssueAccessRequestRes(res);
      setError("");
    } catch (e) {
      setError(e);
    }
  };

  const handleCancelAccessRequest = async () => {
    try {
      const res = await cancelAccessRequest(requestVcUrl, {
        fetch,
      });
      setCancelAccessRequestRes(res);
      setError("");
    } catch (e) {
      setError(e);
    }
  };

  const handleGetAccessGrantFromRedirectUrl = async () => {
    try {
      const res = await getAccessGrantFromRedirectUrl(redirectUrl, {
        fetch,
      });
      setGetAccessGrantFromRedirectUrlRes(res);
      setError("");
    } catch (e) {
      setError(e);
    }
  };

  return (
    <Container style={{ width: "90%" }}>
      <div>
        {isLoggedIn && resourceIri ? <span>yes</span> : <span>no</span>}
        <button
          onClick={handleIssueAccessRequest}
          id="discovery-button"
          type="button"
          className="btn btn-primary"
        >
          issueAccessRequest
        </button>
      </div>
      {/* <IssueRequestForm
        accessMatrix={accessMatrix}
        setAccessMatrix={setAccessMatrix}
      /> */}

      <p style={{ color: "black" }}>
        {issueAccessRequestRes || "click the button above"}
      </p>
      <button
        onClick={handleCancelAccessRequest}
        id="discovery-button"
        type="button"
        className="btn btn-primary"
      >
        cancelAccessRequest
      </button>
      <p style={{ color: "black" }}>
        {cancelAccessRequestRes || "click the button above"}
      </p>
      <button
        onClick={handleGetAccessGrantFromRedirectUrl}
        id="discovery-button"
        type="button"
        className="btn btn-primary"
      >
        getAccessGrantFromRedirectUrl
      </button>
      <p style={{ color: "black" }}>
        {getAccessGrantFromRedirectUrlRes || "click the button above"}
      </p>
    </Container>
  );
}
