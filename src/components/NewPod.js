import React from "react";
import { useSession } from "@inrupt/solid-ui-react";
import { fetch } from "@inrupt/solid-client-authn-browser";

function NewPod() {
  const { session } = useSession();

  const createNewPod = () => {
    if (session.info.isLoggedIn) {
      console.log("WEBID", session.info.webId);
      fetch(`https://provision.inrupt.com/`, {
        method: "POST",
        headers: { Accept: "text/turtle, application/json" },
      })
        .then((response) => response.text())
        .then((d) => {
          console.log(d);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <button className="btn btn-primary" type="button" onClick={createNewPod}>
        Create a new Pod for this WebID
      </button>
    </div>
  );
}

export default NewPod;
