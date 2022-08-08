import React from "react";
import { useSession } from "@inrupt/solid-ui-react";
import { Navbar, NavbarText } from "reactstrap";

function UserDetails() {
  const { session } = useSession();

  return (
    <div>
      <Navbar color="light" expand="md" className="mb-4" container light>
        {!session.info.isLoggedIn && (
          <button
            className="btn btn-primary"
            type="button"
            onClick={() =>
              session.login({
                oidcIssuer: "https://login.inrupt.com/",
                clientName: "Do I have access?",
              })
            }
          >
            Log In
          </button>
        )}

        {session.info.isLoggedIn && (
          <NavbarText className="me-2 text-end" tag="div">
            Logged in as {session.info.webId}
          </NavbarText>
        )}

        {session.info.isLoggedIn && (
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => session.logout()}
          >
            Log Out
          </button>
        )}
      </Navbar>
    </div>
  );
}

export default UserDetails;
