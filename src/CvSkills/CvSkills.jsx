import React from 'react'
import './CvSkills.css'
import resumeJSON from '../models/curriculum-vitae.json'
import PropTypes from 'prop-types';
import withWidth from 'material-ui/utils/withWidth';
import Typography from 'material-ui/Typography';
import Card, { CardContent } from 'material-ui/Card';
import CvSkill from './CvSkill/CvSkill';

const CvSkills = (props) => {
    
    const { width } = props;

    const listWeb = resumeJSON.TechnicalSkills.webTechnologies.list.map((skill) =>
        <CvSkill key={skill.id} img={skill.logo} label={skill.name} />
    );
    const listFrameworks = resumeJSON.TechnicalSkills.jsFrameworks.list.map((skill) =>
        <CvSkill key={skill.id} img={skill.logo} label={skill.name} />
    );
    const listTools = resumeJSON.TechnicalSkills.tools.list.map((skill) =>
        <CvSkill key={skill.id} img={skill.logo} label={skill.name} />
    );
    const listDatabases = resumeJSON.TechnicalSkills.databases.list.map((skill) =>
        <CvSkill key={skill.id} img={skill.logo} label={skill.name} />
    );

    const align = width === 'xs' ? 'center' : 'left'

    return (
        <Card>
            <CardContent className="skls-content">
                    <div className="skls-elem">
                        <Typography gutterBottom align={align} noWrap={true} variant="headline">{resumeJSON.TechnicalSkills.webTechnologies.title}</Typography>
                        {listWeb}
                    </div>
                    <div className="skls-elem">
                        <Typography gutterBottom align={align} noWrap={true} variant="headline">{resumeJSON.TechnicalSkills.jsFrameworks.title}</Typography>
                        {listFrameworks}
                    </div>
                    <div className="skls-elem">
                        <Typography gutterBottom align={align} noWrap={true} variant="headline">{resumeJSON.TechnicalSkills.tools.title}</Typography>
                        {listTools}
                    </div>
                    <div className="skls-elem">
                        <Typography gutterBottom align={align} noWrap={true} variant="headline">{resumeJSON.TechnicalSkills.databases.title}</Typography>
                        {listDatabases}
                    </div>
            </CardContent>
        </Card>
    )
}

CvSkills.propTypes = {
    width: PropTypes.string.isRequired,
};

export default withWidth()(CvSkills);
