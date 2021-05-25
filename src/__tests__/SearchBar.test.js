import React from "react";
import SearchBar from "../components/SearchBar";
import { getByLabelText, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("SearchBar renders with correct elements", () => {
  const stateValues = {
    dark_mode: false,
    search: "hello",
    location: "new york",
    full_time: true,
  };
  const fullTimeToggle = () => {};
  const searchQueryHandler = () => {};
  const searchButtonOnClick = () => {};

  const { getByTestId } = render(
    <SearchBar
      stateValues={stateValues}
      fullTimeToggle={fullTimeToggle}
      searchQueryHandler={searchQueryHandler}
      searchButtonOnClick={searchButtonOnClick}
    />
  );

  const firstInput = getByTestId("first_input");
  expect(firstInput).toBeTruthy();

  const secondInput = getByTestId("second_input");
  expect(secondInput).toBeTruthy();

  const fulltimeToggle = getByTestId("fulltime_toggle");
  expect(fulltimeToggle).toBeTruthy();

  const searchbtn = getByTestId("search_button");
  expect(searchbtn).toBeTruthy();
  expect(searchbtn.textContent).toBe("Search");
});
