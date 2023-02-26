import { render, screen } from "@testing-library/react";
import App from "./App";

test("GeoJsonApp", () => {
  render(<App />);

  const form = screen.getByTestId("form");
  expect(form).toBeInTheDocument();
});
