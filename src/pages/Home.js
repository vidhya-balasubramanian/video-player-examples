import React from "react";
import { withRouter } from "react-router-dom";

const App = (props) => {
  
  return (
    <div>
      <button type="button" onClick={() => props.history.push("/video-js")}>
        Video JS Example
      </button>

      <br />
      <br />

      <button type="button" onClick={() => props.history.push("/graphql")}>
        Graphql Example
      </button>

      <br />
      <br />

      <button type="button" onClick={() => props.history.push("/js-examples")}>
        JS Examples
      </button>
    </div>
  );
};

export default withRouter(App);
