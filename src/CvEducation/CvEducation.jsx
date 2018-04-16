import React from 'react'
import './CvEducation.css'
import resumeJSON from '../models/curriculum-vitae.json'
import CvTimelineMd from '../CvTimeline/CvTimelineMd/CvTimelineMd';
import Typography from 'material-ui/Typography';
import Card, { CardContent } from 'material-ui/Card';

const CvEducationTitle = (props) => {
    return <Typography align={props.align} variant="headline">{props.value}</Typography>
}

const CvEducationContent = (props) => {
    return (
        <Card className="edc-card">
            <CardContent>
                <Typography paragraph={true}>
                    {props.value}
                </Typography>
            </CardContent>
        </Card>
    )
}

const CvEducation = (props) => {

    const listEducation = resumeJSON.education.list.map((item, index) => {
        const align = index % 2 === 0 ? 'right' : 'left'
        return {
            id: item.id,
            header: <CvEducationTitle align={align} value={item.period} />,
            content: <CvEducationContent value={item.desc} />,
            img: item.logo,
        }
    })

    return (
        <CvTimelineMd items={listEducation} />
    )
}


export default CvEducation;