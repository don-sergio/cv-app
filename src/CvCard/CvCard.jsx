import React from 'react'
import './CvCard.css'
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withWidth from 'material-ui/utils/withWidth';
import { withStyles } from 'material-ui/styles';
import resumeJSON from '../models/curriculum-vitae.json'
import Typography from 'material-ui/Typography';
import Card, { CardContent } from 'material-ui/Card';
import Icon from 'material-ui/Icon';

const styles = theme => ({
    leftIcon: {
        color: theme.palette.primary.light,
    }
});

const CvCard = (props) => {
    const { width, classes } = props;
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
                        <Icon className={classes.leftIcon}>phone</Icon>
                        <Typography variant="body1">{resumeJSON.personalDetails.telDisplay}</Typography>
                    </div>
                    <div className="crd-row">
                        <Icon className={classes.leftIcon}>email</Icon>
                        <Typography variant="body1">{resumeJSON.personalDetails.email}</Typography>
                    </div>
                    <div className="crd-row">
                        <Icon className={classes.leftIcon}>location_on</Icon>
                        <Typography variant="body1">{resumeJSON.personalDetails.address}</Typography>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

CvCard.propTypes = {
    width: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles), withWidth())(CvCard);