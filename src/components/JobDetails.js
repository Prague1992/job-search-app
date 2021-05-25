import React, { useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import { Button } from "@material-ui/core";
import Header from "./Header";
import timeAgo from "../utils/timeago";
import { DARK_THEME, LIGHT_THEME, JOB_LIST, JOB_LIST_DETAILS } from "../App";
import "./JobDetails.scss";

const JobDetails = (props) => {
  useEffect(() => {
    localStorage.clear();
    localStorage.setItem("myLocalState", JSON.stringify(props.stateValues));
  }, [props.stateValues]);
  const { stateValues, jobObject, backToHomeHandler, themeChanger } = props;
  const { dark_mode } = stateValues;
  const {
    company_logo,
    company,
    company_url,
    created_at,
    type,
    title,
    location,
    how_to_apply,
    description,
  } = jobObject;
  const JD_MAIN = `jobDetails`;
  const JD_COMPANY_LIGHT = `${JD_MAIN}__company-info ${JD_MAIN}__company-info-light`;
  const JD_COMPANY_DARK = `${JD_MAIN}__company-info ${JD_MAIN}__company-info-dark`;

  return (
    <div
      className={`${
        dark_mode ? DARK_THEME : LIGHT_THEME
      } ${JOB_LIST_DETAILS} ${JOB_LIST}`}
    >
      <Header
        backToHomeHandler={backToHomeHandler}
        themeChanger={themeChanger}
        dark_mode={dark_mode}
      />
      <div className={`${JD_MAIN}`}>
        <div className={`${JD_MAIN}__info`}>
          <div className={`${dark_mode ? JD_COMPANY_DARK : JD_COMPANY_LIGHT}`}>
            <div className={`${JD_MAIN}__company-info-logo`}>
              <img
                src={company_logo}
                alt={company_logo}
                data-testid="company_logo"
                style={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  borderRadius: "7px",
                }}
              />
            </div>
            <div className={`${JD_MAIN}__company-info-name`}>
              <div
                className={`${
                  dark_mode
                    ? `${JD_MAIN}__company-info-name-dark`
                    : `${JD_MAIN}__company-info-name-light`
                }`}
                data-testid="company_name"
              >
                {company}
              </div>
              <div style={{ fontSize: "14px", color: "grey" }}>{company}</div>
            </div>
            <div style={{ margin: "auto" }}>
              <Button
                href={company_url}
                color="primary"
                class={`${JD_MAIN}__button ${JD_MAIN}__button-companyButton`}
                data-testid="company_site_btn"
              >
                Company Site
              </Button>
            </div>
          </div>
          <div
            className={`${JD_MAIN}__details ${
              dark_mode
                ? `${JD_MAIN}__details-dark`
                : `${JD_MAIN}__details-light`
            }`}
          >
            <div className={`${JD_MAIN}__details-grid`}>
              <div>
                <div className={`${JD_MAIN}__details-type`}>{`${timeAgo.ago(
                  created_at
                )} . ${type}`}</div>
                <div
                  className={`${JD_MAIN}__details-title ${
                    dark_mode
                      ? `${JD_MAIN}__details-title-dark`
                      : `${JD_MAIN}__details-title-light`
                  }`}
                  data-testid="job_title"
                >
                  {title}
                </div>
                <div className={`${JD_MAIN}__details-location`}>{location}</div>
              </div>
              <div className={`${JD_MAIN}__details-button`}>
                <Button
                  href={how_to_apply}
                  color="primary"
                  class={`${JD_MAIN}__button ${JD_MAIN}__button-applyButton`}
                  data-testid="apply_now_btn"
                >
                  Apply Now
                </Button>
              </div>
            </div>
            <div
              className={`${
                dark_mode
                  ? `${JD_MAIN}__details-det-dark`
                  : `${JD_MAIN}__details-det-light`
              }`}
              data-testid="job_desc"
            >
              {ReactHtmlParser(description)}
            </div>
          </div>
          <div className={`${JD_MAIN}__apply`}>
            <div className={`${JD_MAIN}__apply-label`}>How to Apply</div>
            <div className={`${JD_MAIN}__apply-info`} data-testid="apply_desc">
              {ReactHtmlParser(how_to_apply)}
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: dark_mode ? "#19212D" : "white" }}>
          <div className={`${JD_MAIN}__footer`}>
            <div className={`${JD_MAIN}__footer-main`}>
              <div
                className={`${JD_MAIN}__footer-title ${
                  dark_mode
                    ? `${JD_MAIN}__footer-title-dark`
                    : `${JD_MAIN}__footer-title-light`
                }`}
              >
                {title}
              </div>
              <div
                className={`${JD_MAIN}__footer-title-company ${
                  dark_mode
                    ? `${JD_MAIN}__footer-title-company-dark`
                    : `${JD_MAIN}__footer-title-company-light`
                }`}
              >
                {company}
              </div>
            </div>
            <div className={`${JD_MAIN}__details-button`}>
              <Button
                href={how_to_apply}
                color="primary"
                class={`${JD_MAIN}__button ${JD_MAIN}__button-applyButton`}
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
