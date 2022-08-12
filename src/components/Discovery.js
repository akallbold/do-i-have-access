import React, { useState } from "react";
import { fetch } from "@inrupt/solid-client-authn-browser";
import { Row, Container, Input } from "reactstrap";
import { useSession } from "@inrupt/solid-ui-react";
import useResource from "../hooks/useResource";

export default function Discovery() {
  const [inputText, setInputText] = useState("");
  const { session } = useSession();
  const { setResourceIri, resourceData, setResourceData, setError } =
    useResource();

  const performGet = async (url) => {
    setResourceIri(url);
    if (session.info.isLoggedIn) {
      fetch(url, {
        method: "GET",
        headers: { Accept: "text/turtle, application/json" },
      })
        .then((response) => response.text())
        .then((d) => {
          setResourceData(d);
        })
        .catch((error) => {
          setError(error);
        });
    } else {
      console.log(
        "If you perform this action without logging in you are checking if this resource is Public. Just plug in the URL in your browser, it's easier and I don't need to write additional logic :)  If you want to see if your specific webId has access than login"
      );
    }
  };

  return (
    <Container style={{ width: "90%" }}>
      <div className="d-grid gap-1">
        <Row
          xs="2"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Input
            type="url"
            placeholder="Type your URL here"
            value={inputText}
            id="discovery-input"
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            style={{ width: "100%", marginRight: "10px" }}
          />
          <button
            onClick={() => performGet(inputText)}
            id="discovery-button"
            type="button"
            className="btn btn-primary"
          >
            Fetch data
          </button>
        </Row>
        <Row style={{ width: "100%", marginRight: "10px" }}>
          <textarea
            id="discovery-response-body"
            className="code-font"
            value={resourceData}
            readOnly
            style={{ width: "100%" }}
          />
        </Row>
      </div>
    </Container>
  );
}
