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
    },
});


const CvToolbar = (props) => {
    const { classes } = props;
    return (
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <Icon>home</Icon>
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

CvToolbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CvToolbar);