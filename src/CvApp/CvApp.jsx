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

const CvApp = (props) => {

    return (
        <div>
            <CssBaseline />
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



                <div className="app-main-row">
                    <div className="app-main-cover">
                        <Typography gutterBottom={true} align="center" variant="body2">
                            {resumeJSON.personalDetails.coverLetter}
                        </Typography>
                    </div>
                </div>

                <Typography align="center" variant="display1">
                    {resumeJSON.TechnicalSkills.title}
                </Typography>
                <Typography gutterBottom={true} align="center" variant="display1">
                    <Icon className="app-leftIcon">settings</Icon>
                </Typography>

                <div className="app-main-row">
                    <div className="app-main-skills">
                        <CvSkills />
                    </div>
                </div>

                <Typography align="center" variant="display1">
                    {resumeJSON.education.title}
                </Typography>
                <Typography gutterBottom={true} align="center" variant="display1">
                    <Icon className="app-leftIcon">school</Icon>
                </Typography>

                <div className="app-main-row">
                    <div className="app-main-education">
                        <CvEducation />
                    </div>
                </div>

                <Typography align="center" variant="display1">
                    {resumeJSON.professionnalExperiences.title}
                </Typography>
                <Typography gutterBottom={true} align="center" variant="display1">
                    <Icon className="app-leftIcon">work</Icon>
                </Typography>

                <div className="app-main-row">
                    <div className="app-main-experience">
                        <CvExperience />
                    </div>
                </div>

                <Typography align="center" variant="display1">
                    {resumeJSON.languages.title}
                </Typography>
                <Typography gutterBottom={true} align="center" variant="display1">
                    <Icon className="app-leftIcon">languages</Icon>
                </Typography>

                <div className="app-main-row">
                    <div className="app-main-languages">
                        <CvLanguages />
                    </div>
                </div>

            </main>
        </div>
    );
}

export default CvApp;
