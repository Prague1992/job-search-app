import React from "react";
import Header from "../components/Header";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("SearchBar renders with correct elements", () => {
  const { getByTestId } = render(<Header />);

  const headerTitle = getByTestId("header_title");
  expect(headerTitle.textContent).toBe("devjobs");

  const headerToggle = getByTestId("header_theme_toggle");
  expect(headerToggle).toBeTruthy();
});
