import React from 'react';
import dataArray from './dataArray';
// import '../images';
// import logo12 from '../images/cpny12.jpeg';

const JobUI = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     cardLists: []
  //   }
  // }
  return(
    <div className = "joblists-container" >
        {
          dataArray.map(job => (
            <div className="cards" key={job.id}>
              <div className="first-div">
                <div className="company-logo">
                  <img src={job.imgSrc} alt="company-logo" />
                </div>
                <div className="company-info">
                  <div className="details company-name" style={{ color: job.color }}>{job.name}</div>
                  <div className="details company-role"> {job.role} </div>
                  <div className="details">
                    <span>{job.datePosted}</span>  &bull; &nbsp;
                        <span>{job.contractType}</span> &bull;  &nbsp;
                        <span>{job.location}</span>
                  </div>
                </div>
              </div>

              <div className="second-div">
                <div className='hr'> <hr /> </div>
                <div className='tech-stack'>
                  <span>{job.techStack}</span>   &nbsp;
                      <span>{job.level}</span>   &nbsp;
                      <span>{job.stack1}</span> &nbsp;
                      <span>{job.stack2}</span>
                </div>
              </div>
            </div>
          ))
        }
      </div > 
    );
}

export default JobUI;