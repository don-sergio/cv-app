import React from 'react'
import './CvCard.css'
import resumeJSON from '../models/curriculum-vitae.json'
import ProfilPicture from '../images/angular.svg'
import Typography from 'material-ui/Typography';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Icon from 'material-ui/Icon';
import Divider from 'material-ui/Divider';

const CvCard = (props) => {

    return (
        <Card className="crd-card">
            <CardMedia
                className="crd-cover"
                image={ProfilPicture}
                title="Profil picture"
            />
            <CardContent className="crd-content">
                <div className="crd-row">
                    <Typography variant="headline">{resumeJSON.personalDetails.fullName}</Typography>
                </div>
                <Divider />
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