import React from 'react'
import './CvLanguages.css'
import resumeJSON from '../models/curriculum-vitae.json'
import Card, { CardContent } from 'material-ui/Card';
import CvGauge from './CvGauge/CvGauge';

const CvLanguages = (props) => {

    const listLanguage = resumeJSON.languages.list.map((lang) => {
        return <CvGauge key={lang.id} language={lang}/>
    })

    return (
        <Card>
            <CardContent className="lgs-content">
                {listLanguage}
            </CardContent>
        </Card>
    )
}

export default CvLanguages;