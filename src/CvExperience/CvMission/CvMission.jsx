import React from 'react'
import './CvMission.css'

import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withWidth from 'material-ui/utils/withWidth';
import Typography from 'material-ui/Typography';
import Card, { CardContent } from 'material-ui/Card';

const CvMission = (props) => {
    const { mission, width } = props
    const alignCenter = width === 'xs' || width === 'sm' ? 'center' : 'inherit'
    const alignJustify = width === 'xs' || width === 'sm' ? 'justify' : 'inherit'
    return (
        <Card className="mission-card">
            <CardContent>
                <Typography gutterBottom align={alignCenter} variant="headline">
                    {mission.title}
                </Typography>
                <div className="mission-subheading">
                    <Typography gutterBottom align={alignCenter} variant="subheading">
                        {mission.period}
                    </Typography>
                    <Typography gutterBottom align={alignCenter} variant="subheading">
                        {mission.client}
                    </Typography>
                </div>
                <Typography align={alignJustify}>
                    {mission.desc}
                </Typography>
            </CardContent>
        </Card>
    )
}

CvMission.propTypes = {
    width: PropTypes.string.isRequired,
};

export default compose(withWidth())(CvMission);