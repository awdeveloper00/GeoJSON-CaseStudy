import React from "react";
//Component for rendering Errors
export default function ErrorComponent({ error }) {
  return (
    <h6 className="error" data-testid="error">
      {error}
    </h6>
  );
}
