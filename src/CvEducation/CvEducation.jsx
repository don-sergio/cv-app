import React from 'react'
import './CvEducation.css'
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withWidth from 'material-ui/utils/withWidth';
import resumeJSON from '../models/curriculum-vitae.json'
import CvTimelineMd from '../CvTimeline/CvTimelineMd/CvTimelineMd';
import CvTimelineXs from '../CvTimeline/CvTimelineXs/CvTimelineXs';
import Typography from 'material-ui/Typography';
import Card, { CardContent } from 'material-ui/Card';

const CvEducationTitle = (props) => {
    return <Typography align={props.align} variant="headline">{props.title}</Typography>
}

const CvEducationContent = (props) => {
    return (
        <Card className="edc-card">
            <CardContent>
                {props.title && <Typography align='center' variant="headline">{props.title}</Typography>}
                <Typography align={props.xs ? 'justify' : 'left'} paragraph={true}>
                    {props.content}
                </Typography>
            </CardContent>
        </Card>
    )
}

const CvEducation = (props) => {

    const { width } = props;

    if (width === 'xs' || width === 'sm') {

        const listEducation = resumeJSON.education.list.map((item, index) => {
            return {
                id: item.id,
                content: <CvEducationContent xs={true} title={item.period} content={item.desc} />,
                img: item.logo,
            }
        })

        return <CvTimelineXs items={listEducation} />

    } else {

        const listEducation = resumeJSON.education.list.map((item, index) => {
            const align = index % 2 === 0 ? 'right' : 'left'
            return {
                id: item.id,
                header: <CvEducationTitle align={align} title={item.period} />,
                content: <CvEducationContent content={item.desc} />,
                img: item.logo,
            }
        })

        return <CvTimelineMd items={listEducation} />

    }

}

CvEducation.propTypes = {
    width: PropTypes.string.isRequired,
};

export default compose(withWidth())(CvEducation);