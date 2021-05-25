import React from "react";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Header = ({ backToHomeHandler, themeChanger, dark_mode }) => {
  const HEADER = `header`;
  return (
    <div className={`${HEADER}`}>
      <div className={`${HEADER}__main`}>
        <div
          className={`${HEADER}__title`}
          onClick={backToHomeHandler}
          data-testid="header_title"
        >
          devjobs
        </div>
        <div className={`${HEADER}__toggle`} data-testid="header_theme_toggle">
          <FontAwesomeIcon
            icon={faSun}
            className={`${HEADER}__icon ${HEADER}__icon-left`}
          />
          <label className={`${HEADER}__switch`}>
            <input
              type="checkbox"
              defaultChecked={dark_mode ? true : false}
              onChange={themeChanger}
            />
            <span className="slider round"></span>
          </label>
          <FontAwesomeIcon
            icon={faMoon}
            className={`${HEADER}__icon ${HEADER}__icon-right`}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
