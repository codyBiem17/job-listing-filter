import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import JobUI from './components/jobs-ui';
import SearchResult from './components/searchResult';
import dataArray from './components/dataArray';
import '../src/scss/App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardLists: [],
      inputValue:  ''
    }
  }

  handleChange = (e) => {
    this.setState({inputValue: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // const keywords = this.state.filter 
    if (this.state.inputValue) {
      // alert('Yaaaayyy! ' + this.state.inputValue + ' exists')
      this.add();
      this.setState({ inputValue: '' })
    }
  }

  filterInput = (e) => {
    e.preventDefault();
    const filteredJobs = dataArray.filter(job => {
      // let str1 = job.role.toUpperCase();
      let str1 = (this.state.inputValue).toUpperCase();
      return (
        job.role.toUpperCase().includes(str1) ||
        job.techStack.toUpperCase().includes(str1) ||
        job.level.toUpperCase().includes(str1) ||
        job.stack1.toUpperCase().includes(str1) ||
        job.stack2.toUpperCase().includes(str1)
      );
    })

    this.setState({
      cardLists: filteredJobs
    })
    console.log(filteredJobs)
  }

  routeChange = () => {
    // let path = `./components/searchResult`;
    // let history = useHistory();
    // history.push(path);
  }

  render() {
    return (
      <div className="App">
        <header id="top-section">
          <div id="wrapper">
            <div id="overlay">
              <p id="short-text">Need a job?</p>
              <form onSubmit={this.filterInput}>
                <input
                  type="text"
                  list="joblist"
                  id="job-list"
                  value={this.state.inputValue}
                  onChange={this.handleChange}
                  placeholder="Enter keyword e.g frontend, html"
                />
                <datalist id="joblist">
                  <option value="Frontend" />
                  <option value="javascript" />
                  <option value="css" />
                  <option value="senior" />
                  <option value="junior" />
                  <option value="entry" />
                  <option value="sass" />
                  <option value="react" />
                  <option value="python" />
                  <option value="intermediate" />
                </datalist>
                <button id="search">Search</button>
              </form>
            </div>
          </div>
        </header>
        <main>
          <JobUI />
          <SearchResult cardLists={this.state.cardLists} />
        </main>
      </div>
    );
  }
}



export default App;
