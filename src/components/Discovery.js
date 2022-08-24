import React, { useState } from "react";
import { fetch } from "@inrupt/solid-client-authn-browser";
import { Row, Container, Input } from "reactstrap";
import { useSession } from "@inrupt/solid-ui-react";
// import { overwriteFile } from "@inrupt/solid-client";
import useResource from "../hooks/useResource";

export default function Discovery() {
  const { session } = useSession();
  const {
    resourceIri,
    setResourceIri,
    resourceData,
    setResourceData,
    setError,
  } = useResource();
  // const [editing, setEditing] = useState(false);
  const [textEdit] = useState(resourceData);

  const performGet = async () => {
    if (session.info.isLoggedIn) {
      fetch(resourceIri, {
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

  // const updateContent = async () => {
  //   try {
  //     await overwriteFile(resourceIri, textEdit, {
  //       // contentType: "application/",
  //       fetch,
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // const handleSave = () => {
  //   setEditing(false);
  //   updateContent();
  // };

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
            value={resourceIri}
            id="discovery-input"
            onChange={(e) => {
              setResourceIri(e.target.value);
            }}
            style={{ width: "100%", marginRight: "10px" }}
          />
          <button
            onClick={performGet}
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
            value={textEdit}
            readOnly
            // readOnly={!editing}
            style={{ width: "100%" }}
            // onChange={(e) => setTextEdit(e.target.value)}
          />

          {/* {editing ? (
            <>
              <button type="button" onClick={handleSave}>
                Save
              </button>

              <button type="button" onClick={setEditing(false)}>
                Cancel
              </button>
            </>
          ) : (
            <button type="button" onClick={setEditing(true)}>
              Edit Mode
            </button>
          )} */}
        </Row>
      </div>
    </Container>
  );
}
