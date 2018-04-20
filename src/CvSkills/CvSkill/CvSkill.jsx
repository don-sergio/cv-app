import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import Icon from 'material-ui/Icon';

function handleDelete(lien) {
    window.open(lien, "_blank")
}

const styles = theme => ({
    chip: {
        margin: theme.spacing.unit / 2,
    },
    txtAvatar: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.contrastText
    },
    chipIcon: {
        color: theme.palette.secondary.main,
        '&:hover': {
            color: theme.palette.secondary.dark,
        },
    }
});

const CvSkill = (props) => {
    const { skill, classes } = props;
    let avatar = false
    if (skill.logo === 'none') {
        avatar = <Avatar className={classes.txtAvatar}>{skill.name.charAt(0)}</Avatar>;
    } else {
        const imgUrl = require(`../../images/${skill.logo}`)
        avatar = <Avatar src={imgUrl} />
    }
    return (
        <Chip
            avatar={avatar}
            label={skill.name}
            onDelete={skill.certificated ? () => handleDelete(skill.link) : undefined}
            className={classes.chip}
            deleteIcon={<Icon className={classes.chipIcon}>check_circle</Icon>}
        />
    );
}

CvSkill.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CvSkill);