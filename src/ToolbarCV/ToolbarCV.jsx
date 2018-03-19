import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Hidden from 'material-ui/Hidden';


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
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


const ToolbarCV = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <Icon>laptop-mac</Icon>
                    </IconButton>

                    <Hidden only={['xs', 'sm']}>
                        <Button href="#skills" className={classes.button} color="inherit">
                            Compétences
                        <Icon className={classes.rightIcon}>settings</Icon>
                        </Button>
                        <Button href="#education" className={classes.button} color="inherit">
                            Diplômes
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

                        <IconButton color="inherit" aria-label="Menu">
                            <Icon>settings</Icon>
                        </IconButton>
                        <IconButton color="inherit" aria-label="Menu">
                            <Icon>school</Icon>
                        </IconButton>
                        <IconButton color="inherit" aria-label="Menu">
                            <Icon>work</Icon>
                        </IconButton>
                        <IconButton color="inherit" aria-label="Menu">
                            <Icon>languages</Icon>
                        </IconButton>
                        <IconButton color="inherit" aria-label="Menu">
                            <Icon>file_download</Icon>
                        </IconButton>

                    </Hidden>

                </Toolbar>
            </AppBar>
        </div>
    );
}

ToolbarCV.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ToolbarCV);