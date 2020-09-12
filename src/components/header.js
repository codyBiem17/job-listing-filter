import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import dataArray from './dataArray';

class Header extends Component {
    // constructor(props){
    //     super(props)
    //     // this.state = {
    //     //     inputValue: ''
    //     // }
    // }

    
    render() {
        const { handleChange, filterInput, inputValue } = this.props;

        return (
            <div id="wrapper">
                <div id="overlay">
                    <p id="short-text">Need a job?</p>
                    <form onSubmit={(e) => filterInput(e)}>
                        <input
                            type="text"
                            list="joblist"
                            id="job-list"
                            value={inputValue}
                            onChange={handleChange}
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
                        
                        <button type="submit" id="search">Search</button>   
                    </form>
                </div>
            </div>
        )
    }
}

export default Header;