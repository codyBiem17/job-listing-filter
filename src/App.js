import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import JobUI from './components/jobs-ui';
import SearchResult from './components/searchResult';
import Header from './components/header';
import dataArray from './components/dataArray';
import '../src/scss/App.scss';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cardLists: [],
      inputValue: ''
    }
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value })
  }


  filterInput = (e) => {
    e.preventDefault();
    const filteredJobs = dataArray.filter(job => {
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
      } //   , () => {
      //   this.props.history.push('result');
      // }
    )
   
    console.log(filteredJobs)
  }


  render() {
    return (

      <BrowserRouter>
        <div className="App">

          <header id="top-section">
            <Header
              handleChange={this.handleChange}
              filterInput={this.filterInput}
              inputValue={this.state.inputValue}
            />
          </header>

          <main>
            <Route path="/">
              <JobUI />
            </Route>
            <Route
              path="/result"
              // render={() => <SearchResult cardLists={this.state.cardLists} />}
            >
              <SearchResult cardLists={this.state.cardLists} />
            </Route>
          </main>

        </div>
      </BrowserRouter>
      
    );
  }
}



export default App;
