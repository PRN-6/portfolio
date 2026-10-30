import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import arrowIcon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div className='mywork' id='work'>
      <div className="mywork-title">
        <h1>My latest work</h1>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div className="mywork-card" key={index}>
            <img src={work.w_img} alt={work.w_name} />
            <div className="mywork-overlay">
              <h3>{work.w_name}</h3>
              <a href="#" className="view-project">
                View <img src={arrowIcon} alt="" />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="mywork-showmore">
        <a href="#" className="showmore-btn">
          Show more <img src={arrowIcon} alt="" />
        </a>
      </div>
    </div>
  )
}

export default MyWork
