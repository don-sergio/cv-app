import React from 'react';
import './CvBanner.css';
import resumeJSON from '../models/curriculum-vitae.json';
import Typography from 'material-ui/Typography';

const CvBanner = (props) => {
    return (
        <div className="bnr-root bnr-banner-dimention">
            <div><Typography align="center" variant="title">{resumeJSON.title}</Typography></div>
        </div>
    )
}

export default CvBanner

