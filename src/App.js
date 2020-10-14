import React, { Component } from 'react';
import fetch from 'node-fetch'
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import JobOffer from './components/JobOffer';
import JobDetails from './components/JobDetails';
import timeago from './utils/timeago';
import Loading from './components/Loading';
import NotFound from './components/NotFound';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      location: "",
      lat: "",
      long: "",
      full_time: false,
      JOBS_ARRAY: [],
      fetching_jobs: true,
      fetched_jobs: false,
      failed_to_load: false,
      jobDetailsFlag: false,
      selectedJob: 0,
      dark_mode: false
    };
    this.jobDetailsFlagHandler = this.jobDetailsFlagHandler.bind(this);
    this.backToHomeHandler = this.backToHomeHandler.bind(this);
    this.searchQueryHandler = this.searchQueryHandler.bind(this);
    this.fullTimeToggle = this.fullTimeToggle.bind(this);
    this.searchButtonOnClick = this.searchButtonOnClick.bind(this);
    this.themeChanger = this.themeChanger.bind(this);
  }

  componentDidMount() {
    const { JOBS_ARRAY } = this.state;
    if (JOBS_ARRAY.length === 0) {
      this.setState({
        fetched_jobs: true
      })
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords)
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        });
        const dataURL = `http://localhost:9000/positions?lat=${position.coords.latitude}&long=${position.coords.longitude}`
        fetch(dataURL)
          .then(response => {
            console.log("called", response)
            response.json();
          })
          .then(data => {
            console.log(data)
            if (data.length > 0) {
              this.setState({
                fetching_jobs: false,
                fetched_jobs: true,
                failed_to_load: false,
                JOBS_ARRAY: [...data]
              })
            } else {
              this.setState({
                fetching_jobs: false,
                fetched_jobs: true,
                failed_to_load: false,
                JOBS_ARRAY: []
              })
            }
          })
          .catch(error => {
            console.log(error);
            this.setState({
              fetching_jobs: false,
              failed_to_load: true
            })
          })
      },
        error => console.log("Error", error),
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
      );
    }
  }

  searchQueryHandler(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  themeChanger(event) {
    this.setState({ dark_mode: !this.state.dark_mode });
  }

  fullTimeToggle(event) {
    this.setState({ full_time: !this.state.full_time });
  }

  searchButtonOnClick() {
    const { search, location, full_time } = this.state
    let URL = "";
    this.setState({
      fetching_jobs: true,
      failed_to_load: false
    })
    if (search || location || full_time) {
      URL = `http://localhost:9000/positions?search=${search}&full_time=${full_time}&location=${location}`;
    } else {
      console.log('here')
      URL = `http://localhost:9000/positions`
    }
    fetch(URL).then(response => response.json()).then(data => {
      if (data.length > 0) {
        this.setState({
          fetching_jobs: false,
          fetched_jobs: true,
          failed_to_load: false,
          JOBS_ARRAY: [...data]
        })
      } else {
        this.setState({
          fetching_jobs: false,
          fetched_jobs: true,
          failed_to_load: false,
          JOBS_ARRAY: []
        })
      }
    }).catch(error => {
      this.setState({
        fetching_jobs: false,
        failed_to_load: true
      })
    })

  }

  jobDetailsFlagHandler(key) {
    this.setState(state => ({
      jobDetailsFlag: !state.jobDetailsFlag,
      selectedJob: key
    }));
  }

  backToHomeHandler() {
    if (this.state.jobDetailsFlag) {
      this.setState({
        jobDetailsFlag: false,
        selectedJob: 0
      })
    }
  }

  render() {
    const timeAgo = timeago;
    const { jobDetailsFlag, selectedJob, dark_mode, JOBS_ARRAY, fetching_jobs, failed_to_load } = this.state;
    return (
      <div
        className={dark_mode ? "AppDark" : "AppLight"}
        style={!jobDetailsFlag ?
          { display: 'grid', gridTemplateRows: '110px 100px auto 100px', minHeight: '100vh', height: 'auto' } :
          { display: 'grid', gridTemplateRows: '110px auto', minHeight: '100vh', height: 'auto' }
        }>
        <Header backToHomeHandler={this.backToHomeHandler} themeChanger={this.themeChanger} />
        {!jobDetailsFlag ? <SearchBar searchQueryHandler={this.searchQueryHandler} stateValues={this.state} fullTimeToggle={this.fullTimeToggle} searchButtonOnClick={this.searchButtonOnClick} /> : null}
        {!jobDetailsFlag ? (
          <div style={{
            margin: '0px 150px 0',
            display: 'grid',
            gridTemplateColumns: (fetching_jobs || failed_to_load) ? 'auto' : '1fr 1fr 1fr',
            gridGap: '20px'
          }}
          >
            {
              fetching_jobs && (<Loading />)
            }
            {
              !fetching_jobs && JOBS_ARRAY && JOBS_ARRAY.length > 0 && (JOBS_ARRAY.map((job, index) => {
                return <JobOffer job={job} key={index} stateValues={this.state} arrayKey={index} timeAgo={timeAgo.ago(job.created_at)} jobDetailsFlagHandler={this.jobDetailsFlagHandler} />
              }))
            }
            {
              failed_to_load && (<NotFound />)
            }
          </div>
        ) : <JobDetails jobObject={JOBS_ARRAY[selectedJob]} stateValues={this.state} timeAgo={timeAgo} />}
      </div>
    );
  }
}

export default App;
