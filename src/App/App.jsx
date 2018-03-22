import React from 'react';
// import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import CvToolbar from '../CvToolbar/CvToolbar.jsx';
import CvBanner from '../CvBanner/CvBanner.jsx';
import CvCard from '../CvCard/CvCard.jsx';

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
                <div className="row">
                    <div className="col-10 col-sm-8 col-md-6 mx-auto">
                        <CvCard />
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
