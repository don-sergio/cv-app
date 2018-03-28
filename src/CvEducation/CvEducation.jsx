import React from 'react'
import './CvEducation.css'
import resumeJSON from '../models/curriculum-vitae.json'
import CvSchool from './CvSchool/CvSchool.jsx'

const CvEducation = (props) => {
    return (
        <div className="edc-root">
            <div className="edc-shool">
                <CvSchool school={resumeJSON.education.list[0]} />
            </div>
            <div className="edc-shool">
                <CvSchool school={resumeJSON.education.list[1]} />
            </div>
        </div>
    )
}

export default CvEducation;