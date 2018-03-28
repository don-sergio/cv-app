import React from 'react';
import './App.css';
import resumeJSON from '../models/curriculum-vitae.json';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import CvToolbar from '../CvToolbar/CvToolbar.jsx';
import CvBanner from '../CvBanner/CvBanner.jsx';
import CvCard from '../CvCard/CvCard.jsx';
import CvSkills from '../CvSkills/CvSkills.jsx';
import CvEducation from '../CvEducation/CvEducation.jsx';
import CvExperience from '../CvExperience/CvExperience.jsx';
import CvLanguages from '../CvLanguages/CvLanguages.jsx';
import Typography from 'material-ui/Typography';

const styles = theme => ({

});

const App = (props) => {
    // const { classes } = props;
    return (
        <div>
            <header>
                <div><CvToolbar /></div>
                <div><CvBanner /></div>
            </header>
            <main>
                <div className="app-main-row">
                    <div className="app-main-card">
                        <CvCard />
                    </div>
                </div>
                <Typography align="center" variant="display1">{resumeJSON.TechnicalSkills.title}</Typography>
                <div className="app-main-row">
                    <div className="app-main-skills">
                        <CvSkills />
                    </div>
                </div>
                <Typography align="center" variant="display1">{resumeJSON.education.title}</Typography>
                <div className="app-main-row">
                    <div className="app-main-education">
                        <CvEducation />
                    </div>
                </div>
                <Typography align="center" variant="display1">{resumeJSON.professionnalExperiences.title}</Typography>
                <div className="app-main-row">
                    <div className="app-main-experience">
                        <CvExperience />
                    </div>
                </div>
                <Typography align="center" variant="display1">{resumeJSON.languages.title}</Typography>
                <div className="app-main-row">
                    <div className="app-main-languages">
                        <CvLanguages />
                    </div>
                </div>
            </main>
        </div>
    );
}


App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
