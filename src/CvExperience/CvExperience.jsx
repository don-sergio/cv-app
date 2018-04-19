import React from 'react'
import './CvExperience.css'
import PropTypes from 'prop-types';
import withWidth from 'material-ui/utils/withWidth';
import CvMission from './CvMission/CvMission.jsx'
import resumeJSON from '../models/curriculum-vitae.json'
import CvTimelineMd from '../CvTimeline/CvTimelineMd/CvTimelineMd';
import CvTimelineXs from '../CvTimeline/CvTimelineXs/CvTimelineXs';
import Typography from 'material-ui/Typography';

const CvEducationTitle = (props) => {
    return <Typography align={props.align} variant="headline">{props.title}</Typography>
}

const CvExperience = (props) => {
    const { width } = props;

    if (width === 'xs' || width === 'sm') {

        const listExperiences = resumeJSON.professionnalExperiences.list.map((item) => {
            return {
                id: item.id,
                content: <CvMission mission={item} />,
                img: item.logo,
            }
        })

        return <CvTimelineXs items={listExperiences} />

    } else {

        const listExperiences = resumeJSON.professionnalExperiences.list.map((item, index) => {
            const align = index % 2 === 0 ? 'right' : 'left'
            return {
                id: item.id,
                header: <CvEducationTitle align={align} title={item.period} />,
                content: <CvMission mission={item} />,
                img: item.logo,
            }
        })

        return <CvTimelineMd items={listExperiences} />

    }
}

CvExperience.propTypes = {
    width: PropTypes.string.isRequired,
};

export default withWidth()(CvExperience);