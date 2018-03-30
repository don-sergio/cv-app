import React from 'react';
import './CvBanner.css';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import resumeJSON from '../models/curriculum-vitae.json'
import { withTheme } from 'material-ui/styles'



const CvBanner = (props) => {

    const { theme } = props;
    const style = {
        color: theme.palette.primary.contrastText
    }

    return (
        <div className="bnr-root bnr-banner-dimention">
            <div className="bnr-degraded">
                <div className="bnr-title">
                <Typography style={style} align="center" variant="headline">{resumeJSON.personalDetails.fullName}</Typography>
                <Typography style={style} align="center" variant="subheading">{resumeJSON.personalDetails.title}</Typography>
                </div>
            </div>
        </div>
    )
}

CvBanner.propTypes = {
    theme: PropTypes.object.isRequired,
};

export default withTheme()(CvBanner);

