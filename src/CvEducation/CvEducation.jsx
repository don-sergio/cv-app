import React from 'react'
import './CvEducation.css'
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withWidth from 'material-ui/utils/withWidth';
import resumeJSON from '../models/curriculum-vitae.json'
import CvSchool from './CvSchool/CvSchool.jsx'
import Typography from 'material-ui/Typography';

const CvEducation = (props) => {

    const { width } = props;
    const styleContentBlock = width === 'xs' || width === 'sm' ? 'edc-col-content' : 'edc-col-content-odd'
    const styleContentTitle = width === 'xs' || width === 'sm' ? 'edc-col-title' : 'edc-col-title-odd'
    const stylebranchHorz = width === 'xs' || width === 'sm' ? 'edc-branch-offset' : 'edc-branch-horizontal'
    const stylebranchOffset = width === 'xs' || width === 'sm' ? 'edc-branch-horizontal' : 'edc-branch-offset'
    const align = width === 'xs' || width === 'sm' ? 'right' : 'left'

    return (

        <div className="edc-timeline">

            <div className="edc-row">

                <div className="edc-col-title">
                    <Typography align="right" variant="headline">
                        {resumeJSON.education.list[0].period}
                    </Typography>
                </div>

                <div className="edc-icon-container">
                    <div className="edc-icon-branch-horizontal">
                        <div className="edc-branch-offset"></div>
                        <div className="edc-icon edc-icon-esisa"></div>
                        <div className="edc-branch-horizontal"></div>
                    </div>

                    <div className="edc-branch-vertical"></div>
                </div>

                <div className="edc-col-content">
                    <CvSchool school={resumeJSON.education.list[0]} />
                </div>

            </div>

            <div className="edc-row">

                <div className={styleContentTitle}>
                    <Typography align={align} variant="headline">
                        {resumeJSON.education.list[1].period}
                    </Typography>
                </div>

                <div className="edc-icon-container">
                    <div className="edc-icon-branch-horizontal">
                        <div className={stylebranchHorz}></div>
                        <div className="edc-icon edc-icon-esisa"></div>
                        <div className={stylebranchOffset}></div>
                    </div>

                    <div className="edc-branch-vertical"></div>
                </div>

                <div className={styleContentBlock}>
                    <CvSchool school={resumeJSON.education.list[1]} />
                </div>

            </div>

        </div>


    )
}

CvEducation.propTypes = {
    width: PropTypes.string.isRequired,
};

export default compose(withWidth())(CvEducation);