import React, { Component } from 'react';
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

  add = () => {
    const filteredJobs = dataArray.filter(job => {
      return job.role === this.state.inputValue;
    })

    console.log(filteredJobs)
  }

  render() {
    return (
      <div className="App">
        <header id="top-section">
          <div id="wrapper">
            <div id="overlay">
              <p id="short-text">Need a job?</p>
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  list="job-list"
                  id="job-list"
                  value={this.state.inputValue}
                  onChange={this.handleChange}
                  placeholder="Enter keyword e.g frontend, html"
                />
                <datalist id="job-list">
                  <option value="Frontend Developer" />
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
          <SearchResult inputValue={this.state.inputValue}/>
        </main>
      </div>
    );
  }
}



export default App;
