import React from 'react'
import './CvCard.css'
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withWidth from 'material-ui/utils/withWidth';
import resumeJSON from '../models/curriculum-vitae.json'
import Typography from 'material-ui/Typography';
import Card, { CardContent } from 'material-ui/Card';
import Icon from 'material-ui/Icon';

const CvCard = (props) => {
    const { width } = props;
    const align = width === 'xs' || width === 'sm' ? 'center' : 'inherit'
    return (
        <Card>
            <CardContent className="crd-content">
                <div className="crd-coverLetter">
                    <Typography gutterBottom align={align} variant="headline">{resumeJSON.personalDetails.coverLetter.title}</Typography>
                    <Typography align="justify" variant="body2">
                        {resumeJSON.personalDetails.coverLetter.content}
                    </Typography>
                </div>
                <div className="crd-information">
                    <Typography gutterBottom align={align} variant="headline">{resumeJSON.personalDetails.title}</Typography>
                    <div className="crd-row">
                        <Icon className="crd-leftIcon">phone</Icon>
                        <Typography variant="body1">{resumeJSON.personalDetails.tel}</Typography>
                    </div>
                    <div className="crd-row">
                        <Icon className="crd-leftIcon">email</Icon>
                        <Typography variant="body1">{resumeJSON.personalDetails.email}</Typography>
                    </div>
                    <div className="crd-row">
                        <Icon className="crd-leftIcon">location_on</Icon>
                        <Typography variant="body1">{resumeJSON.personalDetails.address}</Typography>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

CvCard.propTypes = {
    width: PropTypes.string.isRequired,
};

export default compose(withWidth())(CvCard);