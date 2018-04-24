import React from 'react'
import './CvGauge.css'
import Typography from 'material-ui/Typography';

const CvGauge = (props) => {
    const { language } = props
    const gaugelevelStyle = {
        transform: `rotate(.${language.level}turn)`
    }
    return (
        <div>
            <div className="gauge">
                <div className="meter" style={gaugelevelStyle}></div>
            </div>
            <Typography align="center" variant="body2">{language.name}</Typography>
        </div>
    )
}

export default CvGauge;