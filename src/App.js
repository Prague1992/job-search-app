import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import axios from "axios";
import "./App.scss";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobOffer from "./components/JobOffer";
import JobDetails from "./components/JobDetails";
import timeago from "./utils/timeago";
import Loading from "./components/Loading";
import NotFound from "./components/NotFound";

export const CLASS_MAIN = "app";
export const LIGHT_THEME = `${CLASS_MAIN}__app-light`;
export const DARK_THEME = `${CLASS_MAIN}__app-dark`;
export const JOB_LIST = `${CLASS_MAIN}__job-list`;
export const JOB_LIST_MAIN = `${CLASS_MAIN}__job-list__main`;
export const JOB_LIST_GRID = `${CLASS_MAIN}__job-list__grid`;
export const JOB_LIST_DETAILS = `${CLASS_MAIN}__job-list__details`;
export const JOB_LIST_GRID_NOLIST = `${CLASS_MAIN}__job-list-grid-nolist`;

const App = () => {
  const [jobSearchState, setJobSearchState] = useState(
    JSON.parse(localStorage.getItem("myLocalState")) || {
      search: "",
      location: "",
      lat: "",
      long: "",
      full_time: false,
      JOBS_ARRAY: [],
      fetching_jobs: true,
      fetched_jobs: false,
      failed_to_load: false,
      loading_more: false,
      loaded_more: false,
      jobDetailsFlag: false,
      selectedJob: 0,
      page: 1,
      dark_mode: false,
    }
  );
  const {
    search,
    location,
    full_time,
    JOBS_ARRAY,
    fetching_jobs,
    failed_to_load,
    loading_more,
    jobDetailsFlag,
    page,
    selectedJob,
    dark_mode,
  } = jobSearchState;

  const history = useHistory();

  useEffect(() => {
    // if (JSON.parse(localStorage.getItem("myLocalState"))) {
    //   const perceivedState = JSON.parse(localStorage.getItem("myLocalState"));
    //   console.log("perceivedState", perceivedState);
    //   setJobSearchState({
    //     ...perceivedState,
    //   });
    //   if (perceivedState?.JOBS_ARRAY.length) {
    //     history.push("/joboffers");
    //     return;
    //   }
    // }
    if (
      !JSON.parse(localStorage.getItem("myLocalState")) &&
      navigator.geolocation
    ) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position.coords);
          setJobSearchState({
            ...jobSearchState,
            lat: position.coords.latitude,
            long: position.coords.longitude,
          });
          const dataURL = `http://localhost:9000/positions?lat=${position.coords.latitude}&long=${position.coords.longitude}&page=${page}`;
          handleApiCall(dataURL);
        },
        (error) => console.log("Error", error),
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
      );
      return;
    }
  }, []);

  const handleApiCall = (dataURL) => {
    axios
      .get(dataURL)
      .then(({ data }) => {
        if (data.length > 0) {
          setJobSearchState({
            ...jobSearchState,
            fetching_jobs: false,
            fetched_jobs: true,
            failed_to_load: false,
            JOBS_ARRAY: [...data],
          });
          history.push("/joboffers");
        } else {
          setJobSearchState({
            ...jobSearchState,
            fetching_jobs: false,
            fetched_jobs: true,
            failed_to_load: false,
            JOBS_ARRAY: [],
          });
        }
      })
      .catch(() => {
        setJobSearchState({
          ...jobSearchState,
          fetching_jobs: false,
          failed_to_load: true,
        });
      });
  };

  const searchQueryHandler = (event) => {
    setJobSearchState({
      ...jobSearchState,
      [event.target.name]: event.target.value,
    });
  };

  const themeChanger = (event) => {
    setJobSearchState({ ...jobSearchState, dark_mode: !dark_mode });
  };

  const fullTimeToggle = (event) => {
    setJobSearchState({ ...jobSearchState, full_time: !full_time });
  };

  const searchButtonOnClick = () => {
    history.push("/");
    let URL = "";
    setJobSearchState({
      ...jobSearchState,
      JOBS_ARRAY: [],
      fetching_jobs: true,
      failed_to_load: false,
    });
    if (search || location || full_time) {
      URL = `http://localhost:9000/positions?search=${search}&full_time=${full_time}&location=${location}&page=${page}`;
    } else {
      URL = `http://localhost:9000/positions?page=${page}`;
    }
    handleApiCall(URL);
  };

  const jobDetailsFlagHandler = (key) => {
    setJobSearchState({
      ...jobSearchState,
      jobDetailsFlag: !jobDetailsFlag,
      selectedJob: key,
    });
    history.push("/jobdetails");
  };

  const backToHomeHandler = () => {
    if (jobDetailsFlag) {
      setJobSearchState({
        ...jobSearchState,
        jobDetailsFlag: false,
        selectedJob: 0,
      });
    }
    if (JOBS_ARRAY?.length) {
      history.push("/joboffers");
    }
  };

  const loadMoreItems = () => {
    let URL = "";
    setJobSearchState({
      ...jobSearchState,
      loading_more: true,
      page: jobSearchState.page + 1,
    });
    if (search || location || full_time) {
      URL = `http://localhost:9000/positions?search=${search}&full_time=${full_time}&location=${location}&page=${page}`;
    } else {
      URL = `http://localhost:9000/positions?page=${page}`;
    }
    axios.get(URL).then(({ data }) => {
      if (data.length > 0) {
        setJobSearchState({
          ...jobSearchState,
          loading_more: false,
          loaded_more: true,
          JOBS_ARRAY: [...JOBS_ARRAY, ...data],
        });
      }
    });
  };

  const timeAgo = timeago;
  return (
    <Switch>
      <Route exact path="/">
        <div
          className={`${dark_mode ? DARK_THEME : LIGHT_THEME} ${
            !jobDetailsFlag ? JOB_LIST_MAIN : JOB_LIST_DETAILS
          } ${JOB_LIST}`}
          data-testid="home_div"
        >
          <Header
            backToHomeHandler={backToHomeHandler}
            themeChanger={themeChanger}
            dark_mode={dark_mode}
          />
          <SearchBar
            searchQueryHandler={searchQueryHandler}
            stateValues={jobSearchState}
            fullTimeToggle={fullTimeToggle}
            searchButtonOnClick={searchButtonOnClick}
          />
          <div
            className={`${
              fetching_jobs || failed_to_load || !JOBS_ARRAY.length
                ? JOB_LIST_GRID
                : JOB_LIST_GRID_NOLIST
            }`}
          >
            {fetching_jobs && (
              <Loading width="120px" height="120px" allowLoadingTag={true} />
            )}
            {((failed_to_load && !fetching_jobs) ||
              (!fetching_jobs && !JOBS_ARRAY.length)) && <NotFound />}
          </div>
        </div>
      </Route>
      <Route exact path="/jobdetails">
        <JobDetails
          jobObject={JOBS_ARRAY[selectedJob]}
          stateValues={jobSearchState}
          timeAgo={timeAgo}
          backToHomeHandler={backToHomeHandler}
          themeChanger={themeChanger}
          history={history}
        />
      </Route>
      <Route exact path="/joboffers">
        <JobOffer
          stateValues={jobSearchState}
          jobDetailsFlagHandler={jobDetailsFlagHandler}
          timeAgo={timeAgo}
          backToHomeHandler={backToHomeHandler}
          themeChanger={themeChanger}
          searchQueryHandler={searchQueryHandler}
          fullTimeToggle={fullTimeToggle}
          searchButtonOnClick={searchButtonOnClick}
          loadMoreItems={loadMoreItems}
        />
      </Route>
    </Switch>
  );
};

export default App;
