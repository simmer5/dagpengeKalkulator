import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

describe("renders App component with all content", () => {
  const { getByText } = render(<App />);
  test("renders Title", () => {
    const title = getByText(/Dagpengekalkulator/i);
    expect(title).toBeInTheDocument();
  });

  test("renders all inputs for intekter", () => {
    const { queryAllByRole } = render(<App />);
    const inputs = queryAllByRole("textbox");
    expect(inputs).toHaveLength(3);
  });

  test("renders button Kalkulate", () => {
    const { getByText } = render(<App />);
    const buttonKalkulere = getByText(/Kalkulere/i);
    expect(buttonKalkulere).toBeInTheDocument();
  });
  test("renders button Nullstill", () => {
    const { getByText } = render(<App />);
    const buttonNullstill = getByText(/Nullstill/i);
    expect(buttonNullstill).toBeInTheDocument();
  });
});
