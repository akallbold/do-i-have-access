import { useState } from "react";

const useResource = () => {
  const [resourceIri, setResourceIri] = useState("");
  const [resourceData, setResourceData] = useState("");
  const [accessGrant, setAccessGrant] = useState("");
  const [requestVc, setRequestVc] = useState("");
  const [error, setError] = useState("");

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
  };
};
export default useResource;
