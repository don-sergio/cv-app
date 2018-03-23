import React from 'react';
// import './App.css';
import resumeJSON from '../models/curriculum-vitae.json';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import CvToolbar from '../CvToolbar/CvToolbar.jsx';
import CvBanner from '../CvBanner/CvBanner.jsx';
import CvCard from '../CvCard/CvCard.jsx';
import CvSkills from '../CvSkills/CvSkills.jsx';
import Typography from 'material-ui/Typography';

const styles = theme => ({

});

const App = (props) => {
    // const { classes } = props;
    return (
        <div>
            <header>
                <CvToolbar />
                <CvBanner />
            </header>
            <main className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-10 col-sm-8 col-md-6">
                        <CvCard />
                    </div>
                </div>
                <Typography align="center" variant="display1">{resumeJSON.TechnicalSkills.title}</Typography>
                <div className="row justify-content-center">
                    <div className="col">
                        <CvSkills />
                    </div>
                </div>
                <Typography align="center" variant="display1">{resumeJSON.TechnicalSkills.title}</Typography>
                <div className="row justify-content-center">
                    <div className="col">
                        <CvSkills />
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
