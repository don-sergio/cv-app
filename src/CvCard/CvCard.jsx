import React from 'react'
import './CvCard.css'
import ProfilPicture from '../images/angular.svg'
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Icon from 'material-ui/Icon';
import Divider from 'material-ui/Divider';

const styles = theme => ({

    leftIcon: {
        marginRight: theme.spacing.unit,
    },
});

const CvCard = (props) => {

    const { classes } = props;

    return (
        <Card className="crd-card">
            <CardMedia
                className="crd-cover"
                image={ProfilPicture}
                title="Profil picture"
            />
            <CardContent className="crd-content">
                <div className="crd-row">
                    <Typography variant="headline">Saad Fatihi</Typography>
                </div>
                <Divider />
                <div className="crd-row">
                    <Icon className={classes.leftIcon}>phone</Icon>
                    <Typography variant="subheading">06 64 09 36 88</Typography>
                </div>
                <div className="crd-row">
                    <Icon className={classes.leftIcon}>email</Icon>
                    <Typography variant="subheading">saad.fatihi9@gmail.com</Typography>
                </div>
                <div className="crd-row">
                    <Icon className={classes.leftIcon}>location_on</Icon>
                    <Typography variant="subheading">78500 Sartrouville</Typography>
                </div>
            </CardContent>
        </Card>
    )
}

CvCard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(CvCard);