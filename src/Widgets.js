import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


function Widgets() {

  const newsArticle= (heading, subtitle) => (
    <div className= "widgets__article">
      <div className= "widgets__Left">
        <FiberManualRecordIcon />
      </div>

      <div className= "widgets__Right">
      <h4>  {heading}</h4>
      <p> {subtitle} </p>
      </div>

    </div>
  )



  return (
  <div className= "widgets">

    <div className= "widgets__header">
      <h2> LinkedIn News </h2>
      <InfoIcon />
    </div>

    {newsArticle(" React is Powerful", "Instargram is made from React")}
    {newsArticle(" What's your best time of day?", "Mine is night!")}
    {newsArticle(" Where did you learn programming from?")}
    {newsArticle(" Are you a self taught programmer?", "Mine is night!")}
    {newsArticle(" Football is the best awarded game in the planet")}
    {newsArticle(" Is Redux too good?", " top Reader-5000")}

    </div>
  );
}

export default Widgets
