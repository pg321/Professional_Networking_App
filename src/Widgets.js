import React from 'react'
import "./Widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__articles">
            <div className="widgets__articlesLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articlesRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

  return (
    <div className="widgets">
        <div className="widgets__header">
            <h2>Linkedin News</h2>
            <InfoIcon />
        </div>
        {newsArticle("Chandrayan-3", "Top attention- 990099 readers")}
        {newsArticle("Aditiya L-1 to be launched", "Top attention- 99009 readers")}
        {newsArticle("Aditiya L-1 had a successful launch today", "Top attention- 100589 readers")}
        {newsArticle("Solar Storm warning issued", "Top attention- 689436 reacts")}
        {newsArticle("Praggananda became runner up for World Chess Championship", "Top attention- 898648 reacts")}
    </div>
  )
}

export default Widgets;