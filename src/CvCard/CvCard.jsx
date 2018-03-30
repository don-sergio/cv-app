import React from 'react'
import './CvCard.css'
import resumeJSON from '../models/curriculum-vitae.json'
import Typography from 'material-ui/Typography';
import Card, { CardContent } from 'material-ui/Card';
import Icon from 'material-ui/Icon';

const CvCard = (props) => {

    return (
        <Card className="crd-card">
            <CardContent className="crd-content">
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
            </CardContent>
        </Card>
    )
}

export default CvCard;