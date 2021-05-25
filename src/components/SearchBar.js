import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {
  faSearch,
  faMapMarkerAlt,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.scss";

const SB = "searchBar";
const SB_THEME = `${SB}__theme`;
const SB_LIGHT = `${SB_THEME} ${SB}__theme-light`;
const SB_DARK = `${SB_THEME} ${SB}__theme-dark`;
const SB_BASIC = `${SB} ${SB}__basic`;
const SB_LOCATION = `${SB} ${SB}__location`;

const SearchBar = ({
  searchQueryHandler,
  stateValues,
  fullTimeToggle,
  searchButtonOnClick,
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { dark_mode, search, location, full_time } = stateValues;
  const handleDialogOpen = () => {
    setDialogOpen(!dialogOpen);
  };
  const modalSearchBtn = () => {
    searchButtonOnClick();
    handleDialogOpen();
  };
  return (
    <div className={dark_mode ? `${SB_DARK}` : `${SB_LIGHT}`}>
      <div className={`${SB}__first`} data-testid="first_input">
        <FontAwesomeIcon icon={faSearch} className={`${SB}__icons`} />
        <input
          type="text"
          value={search}
          name="search"
          className={`${SB_BASIC}`}
          style={{ color: dark_mode ? "rgb(243 242 242)" : "#4e4d4d" }}
          placeholder="Filter by title, companies, expertise..."
          onChange={searchQueryHandler}
        ></input>
      </div>
      <div
        className={`${
          dark_mode
            ? `${SB}__background-first-dark`
            : `${SB}__background-first-light`
        } ${SB}__background-first`}
      ></div>
      <div className={`${SB}__second`} data-testid="second_input">
        <FontAwesomeIcon icon={faMapMarkerAlt} className={`${SB}__icons`} />
        <input
          type="text"
          value={location}
          name="location"
          className={`${SB_LOCATION}`}
          style={{ color: dark_mode ? "rgb(243 242 242)" : "#4e4d4d" }}
          placeholder="Filter by location..."
          onChange={searchQueryHandler}
        ></input>
      </div>
      <div
        className={`${
          dark_mode
            ? `${SB}__background-second-dark`
            : `${SB}__background-second-light`
        } ${SB}__background-second`}
      ></div>
      <div className={`container__parent`} data-testid="fulltime_toggle">
        <label className="container">
          <span
            className={`container__label ${
              dark_mode ? "container__label-dark" : "container__label-light"
            }`}
          >
            Full Time Only
          </span>
          <input
            type="checkbox"
            defaultChecked={full_time}
            onChange={fullTimeToggle}
          />
          <span
            className={dark_mode ? "checkmarkDark" : "checkmarkLight"}
          ></span>
        </label>
        <FontAwesomeIcon
          icon={faFilter}
          onClick={handleDialogOpen}
          className={`${SB}__filter-icon`}
        />
        <button
          className="searchbutton"
          onClick={searchButtonOnClick}
          data-testid="search_button"
        >
          <div className={`${SB}__search-label`}>Search</div>
          <FontAwesomeIcon icon={faSearch} className={`${SB}__search-icon`} />
        </button>
      </div>
      <Dialog
        onClose={handleDialogOpen}
        aria-labelledby="simple-dialog-title"
        open={dialogOpen}
      >
        <DialogTitle id="simple-dialog-title">Choose Filter</DialogTitle>
        <List>
          <ListItem>
            <label className="container container__modal">
              <span
                className={`container__label ${
                  dark_mode ? "container__label-dark" : "container__label-light"
                }`}
              >
                Full Time Only
              </span>
              <input
                type="checkbox"
                defaultChecked={full_time}
                onChange={fullTimeToggle}
              />
              <span
                class={dark_mode ? "checkmarkDark" : "checkmarkLight"}
              ></span>
            </label>
          </ListItem>
          <ListItem>
            <div className={`${SB}__second ${SB}__second-modal`}>
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className={`${SB}__icons`}
              />
              <input
                type="text"
                value={location}
                name="location"
                className={`${SB_LOCATION}`}
                placeholder="Filter by location..."
                onChange={searchQueryHandler}
              ></input>
            </div>
          </ListItem>
          <ListItem>
            <button
              className="searchbutton searchbutton__modal"
              onClick={modalSearchBtn}
            >
              Search
            </button>
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
};

export default SearchBar;
