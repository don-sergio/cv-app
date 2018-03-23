import React from 'react'
// import './CvSkills.css'
import resumeJSON from '../models/curriculum-vitae.json'
import Typography from 'material-ui/Typography';
import Card, { CardContent } from 'material-ui/Card';
import CvSkill from './CvSkill/CvSkill';

const CvSkills = (props) => {

    const listWeb = resumeJSON.TechnicalSkills.webTechnologies.list.map((skill) =>
        <CvSkill key={skill.id}>{skill.name}</CvSkill>
    );
    const listFrameworks = resumeJSON.TechnicalSkills.jsFrameworks.list.map((skill) =>
        <CvSkill key={skill.id}>{skill.name}</CvSkill>
    );
    const listTools = resumeJSON.TechnicalSkills.tools.list.map((skill) =>
        <CvSkill key={skill.id}>{skill.name}</CvSkill>
    );
    const listDatabases = resumeJSON.TechnicalSkills.databases.list.map((skill) =>
        <CvSkill key={skill.id}>{skill.name}</CvSkill>
    );

    return (
        <Card>
            <CardContent>
                <div className="row">
                    <div className="col">
                        <Typography variant="subheading">{resumeJSON.TechnicalSkills.webTechnologies.title}</Typography>
                        {listWeb}
                    </div>
                    <div className="col">
                        <Typography variant="subheading">{resumeJSON.TechnicalSkills.jsFrameworks.title}</Typography>
                        {listFrameworks}
                    </div>
                    <div className="w-100"></div>
                    <div className="col">
                        <Typography variant="subheading">{resumeJSON.TechnicalSkills.tools.title}</Typography>
                        {listTools}
                    </div>
                    <div className="col">
                        <Typography variant="subheading">{resumeJSON.TechnicalSkills.databases.title}</Typography>
                        {listDatabases}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default CvSkills;