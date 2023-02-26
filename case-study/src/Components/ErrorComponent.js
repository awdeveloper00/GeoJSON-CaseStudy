import React from "react";

export default function ErrorComponent({ error }) {
  return (
    <h6 className="error" data-testid="error">
      {error}
    </h6>
  );
}
