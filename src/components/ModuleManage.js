import React, { useState } from "react";
import { fetch } from "@inrupt/solid-client-authn-browser";
import {
  approveAccessRequest,
  denyAccessRequest,
  getAccessGrant,
  getAccessGrantAll,
  getAccessRequestFromRedirectUrl,
  redirectToRequestor,
  revokeAccessGrant,
} from "@inrupt/solid-client-access-grants";
// import { MDBIcon } from "mdb-react-ui-kit";
import { useSession } from "@inrupt/solid-ui-react";
import useResource from "../hooks/useResource";
import { moduleManageDocLink } from "../constants";

export default function ModuleManage() {
  const {
    resourceIri,
    requestVcUrl,
    accessGrantVcId,
    redirectUrl,

    setError,
  } = useResource();
  const [approveAccessRequestRes, setApproveAccessRequestRes] = useState("");
  const [denyAccessRequestRes, setDenyAccessRequestRes] = useState("");
  const [getAccessGrantRes, setGetAccessGrantRes] = useState("");
  const [getAccessGrantAllRes, setGetAccessGrantAllRes] = useState("");
  const [
    getAccessRequestFromRedirectUrlRes,
    setGetAccessRequestFromRedirectUrlRes,
  ] = useState("");
  const [redirectToRequestorRes, setRedirectToRequestorRes] = useState("");
  const [revokeAccessGrantRes, setRevokeAccessGrantRes] = useState("");
  const { session } = useSession();
  const { isLoggedIn } = session.info;
  const handleApproveAccessRequest = async () => {
    try {
      const res = await approveAccessRequest(requestVcUrl, { fetch });
      setApproveAccessRequestRes(res);
      setError("");
    } catch (e) {
      setError(e);
    }
  };
  const handleDenyAccessRequest = async () => {
    try {
      const res = await denyAccessRequest(requestVcUrl, { fetch });
      setDenyAccessRequestRes(res);
      setError("");
    } catch (e) {
      setError(e);
    }
  };

  const handleGetAccessGrant = async () => {
    try {
      const res = await getAccessGrant(requestVcUrl, { fetch });
      setGetAccessGrantRes(res);
      setError("");
    } catch (e) {
      setError(e);
    }
  };
  const handleGetAccessGrantAll = async () => {
    try {
      const res = await getAccessGrantAll(resourceIri, { fetch });
      setGetAccessGrantAllRes(res);
      setError("");
    } catch (e) {
      setError(e);
    }
  };
  const handleGetAccessRequestFromRedirectUrl = async () => {
    try {
      const res = await getAccessRequestFromRedirectUrl(redirectUrl, { fetch });
      setGetAccessRequestFromRedirectUrlRes(res);
      setError("");
    } catch (e) {
      setError(e);
    }
  };
  const handleRedirectToRequestor = async () => {
    try {
      const res = await redirectToRequestor(accessGrantVcId, redirectUrl, {
        fetch,
      });
      setRedirectToRequestorRes(res);
      setError("");
    } catch (e) {
      setError(e);
    }
  };
  const handleRevokeAccessGrant = async () => {
    try {
      const res = await revokeAccessGrant(requestVcUrl, {
        fetch,
      });
      setRevokeAccessGrantRes(res);
      setError("");
    } catch (e) {
      setError(e);
    }
  };

  return (
    <>
      <a href={moduleManageDocLink}>
        <p>Module: manage</p>
      </a>
      <div>
        {isLoggedIn && requestVcUrl ? <span>yes</span> : <span>no</span>}

        <button
          onClick={handleApproveAccessRequest}
          id="discovery-button"
          type="button"
          className="btn btn-primary"
        >
          approveAccessRequest - TBD
        </button>
      </div>
      <p style={{ color: "black" }}>
        {approveAccessRequestRes || "click the button above"}
      </p>
      <div>
        {isLoggedIn && requestVcUrl ? <span>yes</span> : <span>no</span>}

        <button
          onClick={handleDenyAccessRequest}
          id="discovery-button"
          type="button"
          className="btn btn-primary"
        >
          denyAccessRequest - TBD
        </button>
      </div>
      <p style={{ color: "black" }}>
        {denyAccessRequestRes || "click the button above"}
      </p>
      <div>
        {isLoggedIn && requestVcUrl ? <span>yes</span> : <span>no</span>}

        <button
          onClick={handleGetAccessGrant}
          id="discovery-button"
          type="button"
          className="btn btn-primary"
        >
          getAccessGrant - TBD
        </button>
      </div>
      <p style={{ color: "black" }}>
        {getAccessGrantRes || "click the button above"}
      </p>
      <div>
        {isLoggedIn && resourceIri ? <span>yes</span> : <span>no</span>}

        <button
          onClick={handleGetAccessGrantAll}
          id="discovery-button"
          type="button"
          className="btn btn-primary"
        >
          getAccessGrantAll
        </button>
      </div>
      <p style={{ color: "black" }}>
        {getAccessGrantAllRes || "click the button above"}
      </p>
      <div>
        {isLoggedIn && redirectUrl ? <span>yes</span> : <span>no</span>}

        <button
          onClick={handleGetAccessRequestFromRedirectUrl}
          id="discovery-button"
          type="button"
          className="btn btn-primary"
        >
          getAccessRequestFromRedirectUrl
        </button>
      </div>
      <p style={{ color: "black" }}>
        {getAccessRequestFromRedirectUrlRes || "click the button above"}
      </p>
      <div>
        {isLoggedIn && accessGrantVcId && redirectUrl ? (
          <span>yes</span>
        ) : (
          <span>no</span>
        )}

        <button
          onClick={handleRedirectToRequestor}
          id="discovery-button"
          type="button"
          className="btn btn-primary"
        >
          redirectToRequestor
        </button>
      </div>
      <p style={{ color: "black" }}>
        {redirectToRequestorRes || "click the button above"}
      </p>
      <div>
        {isLoggedIn && requestVcUrl ? <span>yes</span> : <span>no</span>}
        <button
          onClick={handleRevokeAccessGrant}
          id="discovery-button"
          type="button"
          className="btn btn-primary"
        >
          revokeAccessGrant
        </button>
      </div>
      <p style={{ color: "black" }}>
        {revokeAccessGrantRes || "click the button above"}
      </p>
    </>
  );
}
