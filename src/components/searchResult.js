import React from 'react';
import dataArray from './dataArray';

const SearchResult = ({ inputValue, cardLists }) => {
    
    return (
        <div className="joblists-container" >
            {
                dataArray.filter(job => job.level === inputValue).map(filteredJobs => 
                        <div className="cards" key={filteredJobs.id}>
                            <div className="first-div">
                                <div className="company-logo">
                                    <img src={filteredJobs.imgSrc} alt="company-logo" />
                                </div>
                                <div className="company-info">
                                    <div className="details company-name" style={{ color: filteredJobs.color }}>{filteredJobs.name}</div>
                                    <div className="details company-role"> {filteredJobs.role} </div>
                                    <div className="details">
                                        <span>{filteredJobs.datePosted}</span>  &bull; &nbsp;
                                        <span>{filteredJobs.contractType}</span> &bull;  &nbsp;
                                        <span>{filteredJobs.location}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="second-div">
                                <div className='hr'> <hr /> </div>
                                <div className='tech-stack'>
                                    <span>{filteredJobs.techStack}</span>   &nbsp;
                        <span>{filteredJobs.level}</span>   &nbsp;
                        <span>{filteredJobs.stack1}</span> &nbsp;
                        <span>{filteredJobs.stack2}</span>
                                </div>
                            </div>
                        </div>
                    
                )
            }
        </div >
    );
}

export default SearchResult;