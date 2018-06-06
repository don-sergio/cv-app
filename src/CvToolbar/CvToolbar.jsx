import React from 'react';
import resumeJSON from '../models/curriculum-vitae.json';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Avatar from 'material-ui/Avatar';
import Hidden from 'material-ui/Hidden';
import compose from 'recompose/compose';
import withWidth from 'material-ui/utils/withWidth';
import $ from 'jquery';
import azgerLogo from '../images/azger-logo.svg';
import classnames from 'classnames';

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
            $('#toolbar .tbr-hash').on('click', function (e) {
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
                    <IconButton className={classnames('tbr-hash', classes.menuButton)} color="inherit" aria-label="Menu" href="#">
                    <Avatar src={azgerLogo} />
                    </IconButton>

                    <Hidden only={['xs', 'sm']}>
                        <Button href="#skills" className={classnames('tbr-hash', classes.button)} color="inherit">
                            {resumeJSON.TechnicalSkills.title}
                            <Icon className={classes.rightIcon}>settings</Icon>
                        </Button>
                        <Button href="#education" className={classnames('tbr-hash', classes.button)} color="inherit">
                            {resumeJSON.education.title}
                            <Icon className={classes.rightIcon}>school</Icon>
                        </Button>
                        <Button href="#experience" className={classnames('tbr-hash', classes.button)} color="inherit">
                            Expériences
                            <Icon className={classes.rightIcon}>work</Icon>
                        </Button>
                        <Button href="#languages" className={classnames('tbr-hash', classes.button)} color="inherit">
                            Langues
                            <Icon className={classes.rightIcon}>language</Icon>
                        </Button>

                        <span className={classes.flex}></span>

                        <Button href="cv-sf.pdf" className={classes.button} color="inherit" download>
                            PDF
                            <Icon className={classes.rightIcon}>file_download</Icon>
                        </Button>
                    </Hidden>

                    <Hidden only={['md', 'lg', 'xl']}>

                        <span className={classes.flex}></span>

                        <IconButton href="#skills" className='tbr-hash' color="inherit" aria-label="Menu">
                            <Icon>settings</Icon>
                        </IconButton>
                        <IconButton href="#education" className='tbr-hash' color="inherit" aria-label="Menu">
                            <Icon>school</Icon>
                        </IconButton>
                        <IconButton href="#experience" className='tbr-hash' color="inherit" aria-label="Menu">
                            <Icon>work</Icon>
                        </IconButton>
                        <IconButton href="#languages" className='tbr-hash' color="inherit" aria-label="Menu">
                            <Icon>languages</Icon>
                        </IconButton>
                        <IconButton href="cv-sf.pdf" color="inherit" aria-label="Menu" download>
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
