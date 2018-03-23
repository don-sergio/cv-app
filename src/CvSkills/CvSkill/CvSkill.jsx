import React from 'react'
// import './CvSkill.css'
import Typography from 'material-ui/Typography'

const CvSkill = (props) => {

    return <Typography variant="body1">{props.children}</Typography>;
}

export default CvSkill;