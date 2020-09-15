import { render, fireEvent, findByRole } from "@testing-library/react";
import { validator } from "../utils/dgKalkulator";

describe("tests for kalkulator function", () => {
  test("should return number", () => {
    const arr = [400000, 450000, 500000];
    const G = 101351;

    const dagPenger = validator(arr, G, (dagpengerGrunlag) => {
      const dagpenger = Math.round(dagpengerGrunlag / 260);
      return dagpenger;
    });

    expect(dagPenger).toBe(1923);
  });
  test("should return null", () => {
    const arr = [0, 0, 100000];
    const G = 101351;

    const dagPenger = validator(arr, G, (dagpengerGrunlag) => {
      const dagpenger = Math.round(dagpengerGrunlag / 260);
      return dagpenger;
    });

    expect(dagPenger).toBe(null);
  });
});
