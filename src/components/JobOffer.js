import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import timeAgo from "../utils/timeago";
import "./JobOffer.scss";
import {
  DARK_THEME,
  LIGHT_THEME,
  JOB_LIST,
  JOB_LIST_MAIN,
  JOB_LIST_GRID_NOLIST,
} from "../App";
import Header from "./Header";
import Loading from "./Loading";
import SearchBar from "./SearchBar";

const JobOffer = (props) => {
  const {
    stateValues,
    jobDetailsFlagHandler,
    backToHomeHandler,
    themeChanger,
    searchQueryHandler,
    fullTimeToggle,
    searchButtonOnClick,
    loadMoreItems,
  } = props;
  const { JOBS_ARRAY, dark_mode, fetching_jobs, loading_more } = stateValues;
  const JO_MAIN = `jobOfferMain`;
  const JO_MAIN_LIGHT = `${JO_MAIN} ${JO_MAIN}__light`;
  const JO_MAIN_DARK = `${JO_MAIN} ${JO_MAIN}__dark`;
  useEffect(() => {
    if (props.stateValues.JOBS_ARRAY.length) {
      localStorage.clear();
      localStorage.setItem("myLocalState", JSON.stringify(props.stateValues));
    }
  }, [props.stateValues]);

  return (
    <div
      className={`${
        dark_mode ? DARK_THEME : LIGHT_THEME
      } ${JOB_LIST_MAIN} ${JOB_LIST}`}
    >
      <Header
        backToHomeHandler={backToHomeHandler}
        themeChanger={themeChanger}
        dark_mode={dark_mode}
      />
      <SearchBar
        searchQueryHandler={searchQueryHandler}
        stateValues={stateValues}
        fullTimeToggle={fullTimeToggle}
        searchButtonOnClick={searchButtonOnClick}
      />
      <div className={`${JOB_LIST_GRID_NOLIST}`}>
        {JOBS_ARRAY &&
          JOBS_ARRAY.map((job, index) => {
            return (
              <div
                className={`${dark_mode ? JO_MAIN_DARK : JO_MAIN_LIGHT}`}
                onClick={() => jobDetailsFlagHandler(index)}
                key={index}
                data-testid={`job_offer_${index + 1}`}
              >
                <div
                  className={`${JO_MAIN}__logo`}
                  style={{
                    backgroundImage: `url(${job.company_logo})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                  }}
                  data-testid={`logo_${index + 1}`}
                ></div>
                <div className={`${JO_MAIN}__timeAgo`}>{`${timeAgo.ago(
                  job.created_at
                )} . ${job.type}`}</div>
                <div
                  className={`${JO_MAIN}__jobTitle ${
                    dark_mode
                      ? `${JO_MAIN}__jobTitle-dark`
                      : `${JO_MAIN}__jobTitle-light`
                  }`}
                  data-testid={`job_title_${index + 1}`}
                >
                  {job.title}
                </div>
                <div
                  className={`${JO_MAIN}__label ${JO_MAIN}__label-company`}
                  data-testid={`company_${index + 1}`}
                >
                  {job.company}
                </div>
                <div
                  className={`${JO_MAIN}__label ${JO_MAIN}__label-location`}
                  data-testid={`job_location_${index + 1}`}
                >
                  {job.location}
                </div>
              </div>
            );
          })}
      </div>
      {!fetching_jobs && JOBS_ARRAY.length >= 10 && (
        <Button
          onClick={loadMoreItems}
          className="button"
          style={{
            width: "13%",
            height: "55px",
            margin: "auto",
            background: "#5865E0",
            color: "white",
          }}
          data-testid={`load_more_btn`}
        >
          {loading_more ? (
            <Loading width="0px" height="0px" allowLoadingTag={false} />
          ) : (
            "Load More"
          )}
        </Button>
      )}
    </div>
  );
};

export default JobOffer;
