import React from "react";
import _ from "lodash";

export default () => {
  const [state, useState] = React.useState(false);
  return React.useMemo(
    () => (
      <div
        style={{ backgroundColor: state ? "red" : "white" }}
        onClick={() => useState(() => !state)}
      >
        Hello World
      </div>
    ),
    [state]
  );
};
