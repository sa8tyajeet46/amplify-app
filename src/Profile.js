import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
function Profile() {
  const [kuser, setUser] = useState({});
  const p = async () => {
    try {
      const data = await Auth.currentUserPoolUser();
      const userInfo = { username: data.username, ...data.attributes };
      setUser(userInfo);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    p();
  }, []);
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <p>Hey {kuser.username}, welcome to my channel, with auth!</p>

          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
  );
}

export default Profile;
