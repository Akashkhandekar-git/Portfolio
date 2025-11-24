import React from 'react';
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";

const MyWork = () => {
  return (
    <div id="mywork" className='mywork'>
      <div className='mywork_title'>
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>

      <div className='mywork_container'>
        {mywork_data.map((work, index) => (
          <img key={index} src={work.w_img} alt={`work-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default MyWork;
