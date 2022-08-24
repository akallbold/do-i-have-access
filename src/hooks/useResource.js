import { useState } from "react";

const useResource = () => {
  const [resourceIri, setResourceIri] = useState("");
  const [resourceOwner, setResourceOwner] = useState("");
  const [resourceData, setResourceData] = useState("");
  const [accessGrant, setAccessGrant] = useState("");
  const [requestVc, setRequestVc] = useState("");
  const [error, setError] = useState("");
  const [requestVcUrl, setRequestVcUrl] = useState("");
  const [accessGrantVcId, setAccessGrantVcId] = useState("");
  const [redirectUrl, setRedirectUrl] = useState("");
  const [accessRequestParams, setAccessRequestParams] = useState("");

  return {
    resourceIri,
    setResourceIri,
    resourceData,
    setResourceData,
    error,
    setError,
    accessGrant,
    setAccessGrant,
    requestVc,
    setRequestVc,
    requestVcUrl,
    setRequestVcUrl,
    accessGrantVcId,
    setAccessGrantVcId,
    redirectUrl,
    setRedirectUrl,
    resourceOwner,
    setResourceOwner,
    accessRequestParams,
    setAccessRequestParams,
  };
};
export default useResource;
