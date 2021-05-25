import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

test("App renders with correct elements", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const homeDiv = getByTestId("home_div");
  expect(homeDiv).toBeTruthy();
});
