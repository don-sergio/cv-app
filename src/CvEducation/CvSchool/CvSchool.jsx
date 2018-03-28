import React from 'react'
import './CvSchool.css'
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withWidth from 'material-ui/utils/withWidth';
import Typography from 'material-ui/Typography';
import Card, { CardContent } from 'material-ui/Card';

const CvSchool = (props) => {
    const { school, width } = props
    const align = width === 'xs' || width === 'sm' ? 'center' : 'inherit'
    console.log(width);
    return (
        <Card className="schl-card">
            <CardContent>
                <Typography gutterBottom align={align} variant="headline">
                    {school.period}
                </Typography>
                <Typography align={align}>
                    {school.desc}
                </Typography>
            </CardContent>
        </Card>
    )
}

CvSchool.propTypes = {
    width: PropTypes.string.isRequired,
};

export default compose(withWidth())(CvSchool);
