import React from 'react';
import './CvApp.css';
import CssBaseline from 'material-ui/CssBaseline';
import resumeJSON from '../models/curriculum-vitae.json';
import CvToolbar from '../CvToolbar/CvToolbar.jsx';
import CvBanner from '../CvBanner/CvBanner.jsx';
import CvCard from '../CvCard/CvCard.jsx';
import CvSkills from '../CvSkills/CvSkills.jsx';
import CvEducation from '../CvEducation/CvEducation.jsx';
import CvExperience from '../CvExperience/CvExperience.jsx';
import CvLanguages from '../CvLanguages/CvLanguages.jsx';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Zoom from 'material-ui/transitions/Zoom';

const styles = theme => ({
    fabPhone: {
        position: 'fixed',
        bottom: theme.spacing.unit * 10 + 136,
        right: theme.spacing.unit * 5,
    },
    fabShare: {
        position: 'fixed',
        bottom: theme.spacing.unit * 8 + 96,
        right: theme.spacing.unit * 5,
    },
    fabMail: {
        position: 'fixed',
        bottom: theme.spacing.unit * 6 + 56,
        right: theme.spacing.unit * 5,
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing.unit * 4,
        right: theme.spacing.unit * 4,
    },
});

class CvApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        };
    }

    handleChange = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    render() {

        const { classes } = this.props;
        const { clicked } = this.state;

        return (
            <div>
                <CssBaseline />
                <header>
                    <div><CvToolbar /></div>
                    <div className="app-header-banner" id="banner">
                        <CvBanner />
                    </div>
                    <div className="app-header-card">
                        <CvCard />
                    </div>
                </header>
                <main>

                    <div className="app-main-block" id="skills">
                        <Typography align="center" variant="display1">
                            {resumeJSON.TechnicalSkills.title}
                        </Typography>
                        <Typography gutterBottom={true} align="center" variant="display1">
                            <Icon className="app-leftIcon">settings</Icon>
                        </Typography>

                        <div className="app-main-skills">
                            <CvSkills />
                        </div>
                    </div>

                    <div className="app-main-block" id="education">
                        <Typography align="center" variant="display1">
                            {resumeJSON.education.title}
                        </Typography>
                        <Typography gutterBottom={true} align="center" variant="display1">
                            <Icon className="app-leftIcon">school</Icon>
                        </Typography>

                        <div className="app-main-education">
                            <CvEducation />
                        </div>
                    </div>

                    <div className="app-main-block" id="experience">
                        <Typography align="center" variant="display1">
                            {resumeJSON.professionnalExperiences.title}
                        </Typography>
                        <Typography gutterBottom={true} align="center" variant="display1">
                            <Icon className="app-leftIcon">work</Icon>
                        </Typography>

                        <div className="app-main-experience">
                            <CvExperience />
                        </div>
                    </div>

                    <div className="app-main-block" id="languages">
                        <Typography align="center" variant="display1">
                            {resumeJSON.languages.title}
                        </Typography>
                        <Typography gutterBottom={true} align="center" variant="display1">
                            <Icon className="app-leftIcon">languages</Icon>
                        </Typography>

                        <div className="app-main-languages">
                            <CvLanguages />
                        </div>
                    </div>

                </main>

                <Zoom in={clicked} style={{ transitionDelay: clicked ? 200 : 0 }}>
                    <Button variant="fab" mini onClick={this.handleChange} color="primary" 
                        href={`tel:${resumeJSON.personalDetails.tel}`} title="Téléphone" className={classes.fabPhone}>
                        <Icon>phone</Icon>
                    </Button>
                </Zoom>
                <Zoom in={clicked} style={{ transitionDelay: 100 }}>
                    <Button variant="fab" mini onClick={this.handleChange} color="primary"
                        href={resumeJSON.personalDetails.linkedin} title="Linkedin" target="_blank"
                        className={classes.fabShare}>
                        <Icon>share</Icon>
                    </Button>
                </Zoom>
                <Zoom in={clicked} style={{ transitionDelay: clicked ? 0 : 200 }}>
                    <Button variant="fab" mini onClick={this.handleChange} color="primary"
                        href={`mailto:${resumeJSON.personalDetails.email}`} title="Email" className={classes.fabMail}>
                        <Icon>mail_outline</Icon>
                    </Button>
                </Zoom>
                <Button variant="fab" onClick={this.handleChange} color="secondary" className={classes.fab}>
                    {clicked ? <Icon>close</Icon> : <Icon>mail_outline</Icon>}
                </Button>
            </div>
        );

    }
}

CvApp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CvApp);
