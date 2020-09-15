import React from "react";
import { render, fireEvent, findByRole } from "@testing-library/react";

import DagpengeKalkulator from "../components/DagpengeKalkulator";
import InfoPaper from "../components/InfoPaper";

describe("test of the main component DagpengeKalkulator", () => {
  test("Displays form", () => {
    const { getByTestId, queryAllByTestId } = render(<DagpengeKalkulator />);
    const form = getByTestId("form");
    const Inputs = queryAllByTestId("input");
    const submit = getByTestId("submit");
    const reset = getByTestId("reset");

    expect(form).toBeInTheDocument();
    expect(Inputs[0]).toHaveValue("");
    expect(Inputs[1]).toHaveValue("");
    expect(Inputs[2]).toHaveValue("");
    expect(Inputs).toHaveLength(3);
    expect(submit).toBeInTheDocument();
    expect(reset).toBeInTheDocument();
  });

  test("should check if textfields clears after Nullstill button is clicked", () => {
    const { getByTestId, queryAllByTestId } = render(<DagpengeKalkulator />);

    const Inputs = queryAllByTestId("input");
    const reset = getByTestId("reset");

    fireEvent.change(Inputs[0], { target: { value: "400000" } });
    fireEvent.change(Inputs[1], { target: { value: "450000" } });
    fireEvent.change(Inputs[2], { target: { value: "500000" } });
    fireEvent.click(reset);
    expect(Inputs[0]).toHaveValue();
    expect(Inputs[1]).toHaveValue();
    expect(Inputs[2]).toHaveValue();
  });

  test("should check if message apears after Kalkulere button is clicked", () => {
    const { getByTestId, queryAllByTestId, getByText, find } = render(
      <DagpengeKalkulator />
    );

    const submit = getByTestId("submit");
    fireEvent.click(submit);
    expect(findByRole(InfoPaper)).toBeInTheDocument;
  });
});
