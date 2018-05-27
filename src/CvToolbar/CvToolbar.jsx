import React from 'react';
import resumeJSON from '../models/curriculum-vitae.json';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Hidden from 'material-ui/Hidden';
import compose from 'recompose/compose';
import withWidth from 'material-ui/utils/withWidth';
import $ from 'jquery';

const styles = theme => ({
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    button: {
        margin: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    }
});

class CvToolbar extends React.Component {
    componentDidMount() {
        this.addEvents();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.addEvents();
    }

    addEvents() {
        $(function () {
            $('#toolbar a').on('click', function (e) {
                e.preventDefault();
                var hash = this.hash;
                if (hash !== '') {
                    $('html, body').animate({
                        scrollTop: $(this.hash).offset().top
                    }, 500, function () {
                        window.location.hash = hash;
                    });
                } else {
                    $('html, body').animate({
                        scrollTop: 0
                    }, 500, function () {
                        window.location.hash = '#';
                    });
                }
            });
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <AppBar position="fixed">
                <Toolbar id="toolbar">
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" href="#">
                    <svg height="56" width="56" version="1.2" baseProfile="tiny" id="Calque_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 453.5 453.5">
                        <path fill="none" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10" d="M297.8,233.8c0,0,22-10.5,43-12.5
                            c24.5-3.5,33.5,3,33.5,3s-13,35-37,34.8S297.8,233.8,297.8,233.8z"/>
                        <path fill="none" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10" d="M189.8,301.7c-5.2,6.3-5.2,18.7-5.2,18.7
                            c0,19,18.2,35.4,40.7,34.3c21.2-1,42.8-16.3,41.7-34c1.7-35.7-118.7-117.7-182-96.2c13.5,30.4,33,40,58,30.3
                            c33.6,15,62.6,33.7,86.5,56.5c0,0,7.1,6.6,2.3,12.8c-5.2,6.8-16.8-1.8-16.8-1.8L189.8,301.7z"/>
                        <path fill="none" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10" d="M277.6,226.1c11.3-22,48.2-37.7,74.1-45.5
                            s53.9-14,73.5-30.9c11.4-9.8,20.8-22.6,22-36.6c0.4-4.6-1.3-10.5-1.5-15.1c-3.8,24.1-28.5,41.9-54.5,50.1
                            c-26.5,8.5-54.7,9.7-80.9,15.3c-26.8,5.7-54.3,17.5-66.8,39.2L277.6,226.1z"/>
                        <path fill="none" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10" d="M169.5,216.9c-19.2-12.9-45.5-29.7-67.7-36.3
                            c-25.9-7.8-53.9-14-73.5-30.9c-11.4-9.8-20.8-22.6-22-36.6c-0.4-4.6,1.3-10.5,1.5-15.1c3.8,24.1,28.5,41.9,54.5,50.1
                            c26.5,8.5,54.7,9.7,80.9,15.3c19.8,4.2,39.1,12.7,54.2,24.1c20.4,15.4,96,62.2,96,62.2s-21.5,35-30,29
                            C243.3,264.4,191.1,231.4,169.5,216.9z"/>
                    </svg>
                    </IconButton>

                    <Hidden only={['xs', 'sm']}>
                        <Button href="#skills" className={classes.button} color="inherit">
                            {resumeJSON.TechnicalSkills.title}
                            <Icon className={classes.rightIcon}>settings</Icon>
                        </Button>
                        <Button href="#education" className={classes.button} color="inherit">
                            {resumeJSON.education.title}
                            <Icon className={classes.rightIcon}>school</Icon>
                        </Button>
                        <Button href="#experience" className={classes.button} color="inherit">
                            Expériences
                            <Icon className={classes.rightIcon}>work</Icon>
                        </Button>
                        <Button href="#languages" className={classes.button} color="inherit">
                            Langues
                            <Icon className={classes.rightIcon}>language</Icon>
                        </Button>

                        <span className={classes.flex}></span>

                        <Button className={classes.button} color="inherit">
                            PDF
                            <Icon className={classes.rightIcon}>file_download</Icon>
                        </Button>
                    </Hidden>

                    <Hidden only={['md', 'lg', 'xl']}>

                        <span className={classes.flex}></span>

                        <IconButton href="#skills" color="inherit" aria-label="Menu">
                            <Icon>settings</Icon>
                        </IconButton>
                        <IconButton href="#education" color="inherit" aria-label="Menu">
                            <Icon>school</Icon>
                        </IconButton>
                        <IconButton href="#experience" color="inherit" aria-label="Menu">
                            <Icon>work</Icon>
                        </IconButton>
                        <IconButton href="#languages" color="inherit" aria-label="Menu">
                            <Icon>languages</Icon>
                        </IconButton>
                        <IconButton color="inherit" aria-label="Menu">
                            <Icon>file_download</Icon>
                        </IconButton>

                    </Hidden>

                </Toolbar>
            </AppBar>
        );
    }
}

CvToolbar.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired
};

export default compose(withStyles(styles), withWidth())(CvToolbar);
