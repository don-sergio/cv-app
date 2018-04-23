import React from 'react'
import './CvMission.css'
import Hidden from 'material-ui/Hidden';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';
import Typography from 'material-ui/Typography';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import classnames from 'classnames';
import Collapse from 'material-ui/transitions/Collapse';

const styles = theme => ({
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    }
});

class CvMission extends React.Component {

    constructor(props) {
        super(props);
        this.state = { expanded: false };
    }

    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    };

    render = () => {
        const { classes, width, mission } = this.props
        const alignCenter = width === 'xs' || width === 'sm' ? 'center' : 'inherit'
        const alignJustify = width === 'xs' || width === 'sm' ? 'justify' : 'inherit'
        const taskList = mission.tasks.map((task, index) => {
            return <li key={index}><Typography>{task}</Typography></li>
        })
        return (
            <Card className="mission-card">
                <CardContent>
                    <Typography gutterBottom align={alignCenter} variant="headline">
                        {mission.title}
                    </Typography>
                    <div className="mission-subheading">
                        <Hidden mdUp>
                            <Typography gutterBottom align={alignCenter} variant="subheading">
                                {mission.period}
                            </Typography>
                        </Hidden>
                        <Typography gutterBottom align={alignCenter} variant="subheading">
                            {mission.client}
                        </Typography>
                    </div>
                    <Typography align={alignJustify} paragraph={true}>
                        {mission.desc}
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton
                        className={classnames(classes.expand, {
                            [classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"
                    >
                        <Icon>expand_more</Icon>
                    </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography gutterBottom variant="subheading">Tâches :</Typography>
                        <ul>
                            {taskList}
                        </ul>
                    </CardContent>
                </Collapse>
            </Card>
        )
    }

}

CvMission.propTypes = {
    width: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles), withWidth())(CvMission);