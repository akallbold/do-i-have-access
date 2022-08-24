import React, { useState } from "react";
import { fetch } from "@inrupt/solid-client-authn-browser";
import { fetchWithVc } from "@inrupt/solid-client-access-grants";
// import { MDBIcon } from "mdb-react-ui-kit";
import { useSession } from "@inrupt/solid-ui-react";
import useResource from "../hooks/useResource";
import { moduleFetchDocLink } from "../constants";

export default function ModuleFetch() {
  const { resourceIri, accessGrant, setError } = useResource();
  const [fetchWithVcRes, setFetchWithVcRes] = useState("");
  const { session } = useSession();
  const { isLoggedIn } = session.info;
  const handleFetchWithVc = async () => {
    try {
      const res = await fetchWithVc(resourceIri, accessGrant, { fetch });
      setFetchWithVcRes(res);
      setError("");
    } catch (e) {
      setError(e);
    }
  };

  return (
    <>
      <a href={moduleFetchDocLink}>
        <p>Module: fetch</p>
      </a>
      <div>
        {isLoggedIn && resourceIri && accessGrant ? (
          <span>yes</span>
        ) : (
          <span>no</span>
        )}
        <button
          onClick={handleFetchWithVc}
          id="discovery-button"
          type="button"
          className="btn btn-primary"
        >
          fetchWithVc - TBD
        </button>
      </div>
      <p style={{ color: "black" }}>
        {fetchWithVcRes || "click the button above"}
      </p>
    </>
  );
}
