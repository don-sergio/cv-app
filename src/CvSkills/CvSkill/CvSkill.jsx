import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
// import img from '../../images/html.svg'

function handleDelete() {

}

const styles = theme => ({
    chip: {
        margin: theme.spacing.unit / 2,
    },
    txtAvatar: {
        backgroundColor: theme.palette.secondary.main,
      }
});

const CvSkill = (props) => {
    const { img, label, classes } = props;
    let avatar = false
    if (img === 'none') {
        avatar = <Avatar className={classes.txtAvatar}>{label.charAt(0)}</Avatar>;
    } else {
        const imgUrl = require(`../../images/${img}`)
        avatar = <Avatar src={imgUrl} />
    }
    return (
        <Chip
            avatar={avatar}
            label={label}
            onDelete={handleDelete}
            className={classes.chip}
        />
    );
}

CvSkill.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CvSkill);