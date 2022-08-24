import React, { useState } from "react";
import { fetch } from "@inrupt/solid-client-authn-browser";
import { Container } from "reactstrap";
import { useSession } from "@inrupt/solid-ui-react";
import useResource from "../hooks/useResource";

export default function UserProfile() {
  const { session } = useSession();
  const { setError } = useResource();
  const [profileData, setProfileData] = useState("");

  const performGet = async () => {
    if (session.info.isLoggedIn) {
      fetch(session.info.webId, {
        method: "GET",
        headers: { Accept: "text/turtle, application/json" },
      })
        .then((response) => response.text())
        .then((d) => {
          setProfileData(d);
        })
        .catch((error) => {
          setError(error);
        });
    }
  };

  return (
    <Container style={{ width: "90%" }}>
      <div className="d-grid gap-1">
        <button
          onClick={performGet}
          id="discovery-button"
          type="button"
          className="btn btn-primary"
        >
          Fetch Profile data
        </button>

        <textarea
          id="discovery-response-body"
          className="code-font"
          value={profileData}
          readOnly
          style={{ width: "100%" }}
        />
      </div>
    </Container>
  );
}
