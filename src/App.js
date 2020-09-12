import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import JobUI from "./components/jobs-ui";
import SearchResult from "./components/searchResult";
import Header from "./components/header";
import dataArray from "./components/dataArray";
import "../src/scss/App.scss";

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardLists: [],
      inputValue: "",
      isLoading: true
    };
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  filterInput = (e) => {
    e.preventDefault();
    console.log("called");
    const filteredJobs = dataArray.filter((job) => {
      let str1 = this.state.inputValue.toUpperCase();

      return (
        job.name.toUpperCase().includes(str1) ||
        job.role.toUpperCase().includes(str1) ||
        job.techStack.toUpperCase().includes(str1) ||
        job.level.toUpperCase().includes(str1) ||
        job.stack1.toUpperCase().includes(str1) ||
        job.stack2.toUpperCase().includes(str1)
      );
    });

    this.setState(
      {
        cardLists: filteredJobs
      },
      () => {
        console.log(this.state.cardLists);
        history.push("/result");
      }
    );
  };

  render() {
    return (
      <Router history={history}>
        <div className="App">
          <header id="top-section">
            <Header
              handleChange={this.handleChange}
              filterInput={this.filterInput}
              inputValue={this.state.inputValue}
            />
          </header>

          <main>
            {/* {this.state.isLoading ? history.push("/") : 'balderdash'} */}
            <Route exact path="/">
              <JobUI />
            </Route>
            <Route path="/result">
              <SearchResult cardLists={this.state.cardLists} />
            </Route>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
