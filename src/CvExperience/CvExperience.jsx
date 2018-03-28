import React from 'react'
import './CvExperience.css'
import CvMission from './CvMission/CvMission.jsx'
import resumeJSON from '../models/curriculum-vitae.json'

const CvExperience = (props) => {

    const listMissions = resumeJSON.professionnalExperiences.list.map((value) => {
        return (<div key={value.id} className="expr-mission">
            <CvMission mission={value} />
        </div>)
    })

    return (
        <div className="expr-root">
            {listMissions}
        </div>
    )
}

export default CvExperience;